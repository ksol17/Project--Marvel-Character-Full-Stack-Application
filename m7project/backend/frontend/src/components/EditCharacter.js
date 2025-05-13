// src/components/EditCharacter.js
import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditCharacter = () => {
  const { id } = useParams(); // Get the character ID from the URL
  const [formData, setFormData] = useState({
    name: '',
    alias: '',
    alignment: '',
    powers: '',
    image_url: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);  // To show success message
  const navigate = useNavigate();

  // Fetch character data to pre-populate the form
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/characters/${id}`)
      .then((response) => {
        setFormData(response.data);  // Pre-populate the form
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load character data');
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false); // Reset success state before making the PUT request
    setError('');

    // Send PUT request to update character
    axios.put(`http://127.0.0.1:5000/characters/${id}`, formData)
      .then((response) => {
        setLoading(false);
        setSuccess(true);  // Show success message after successful update
        setTimeout(() => navigate(`/characters/${response.data.id}`), 2000); // Redirect after 2 seconds
      })
      .catch((err) => {
        setLoading(false);
        setError('Failed to update character');
      });
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Character updated successfully!</Alert>} {/* Success message */}

      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="alias">
        <Form.Label>Alias</Form.Label>
        <Form.Control
          type="text"
          name="alias"
          value={formData.alias}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="alignment">
        <Form.Label>Alignment</Form.Label>
        <Form.Control
          as="select"
          name="alignment"
          value={formData.alignment}
          onChange={handleChange}
          required
        >
          <option value="hero">Hero</option>
          <option value="villain">Villain</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="powers">
        <Form.Label>Powers</Form.Label>
        <Form.Control
          as="textarea"
          name="powers"
          value={formData.powers}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="image_url">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">Update Character</Button>
    </Form>
  );
};

export default EditCharacter;
