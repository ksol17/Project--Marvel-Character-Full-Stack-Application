// src/components/DeleteCharacter.js
import React, { useState } from 'react';
import { Button, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteCharacter = ({ id }) => {
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(''); // Track error messages
  const [deleted, setDeleted] = useState(false); // Track if character is deleted
  const navigate = useNavigate(); // To navigate the user after deletion

  const handleDelete = () => {
    setLoading(true); // Set loading to true when deletion starts
    setError(''); // Reset error state
    setDeleted(false); // Reset deleted state before the delete attempt

    // Send DELETE request to the backend
    axios.delete(`http://127.0.0.1:5000/characters/${id}`)
      .then(() => {
        setLoading(false);
        setDeleted(true); // Set deleted to true when successful
        setTimeout(() => navigate('/'), 2000); // Redirect to home page after 2 seconds
      })
      .catch((err) => {
        setLoading(false);
        setError('Failed to delete character'); // Show error if deletion fails
      });
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>} {/* Show error if any */}
      {deleted && <Alert variant="success">Character deleted successfully!</Alert>} {/* Success message */}
      <Button variant="danger" onClick={handleDelete}>Delete Character</Button>
    </>
  );
};

export default DeleteCharacter;
