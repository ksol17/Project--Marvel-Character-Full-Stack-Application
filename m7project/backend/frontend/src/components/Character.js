// src/components/Character.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import DeleteCharacter from './DeleteCharacter';  // Import DeleteCharacter component

const Character = () => {
  const { id } = useParams(); // Get the character ID from the URL
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updated, setUpdated] = useState(false);  // Track if character is updated

  // Fetch character details on mount
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/characters/${id}`)
      .then((response) => {
        setCharacter(response.data);  // Set the character data
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load character');
        setLoading(false);
      });
  }, [id]);

  // Handle when the character is successfully updated
  useEffect(() => {
    if (updated) {
      // Show the update confirmation for 3 seconds and then hide it
      const timer = setTimeout(() => setUpdated(false), 3000);
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [updated]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Card>
      <Card.Img variant="top" src={character.image_url} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>Alias: {character.alias}</Card.Text>
        <Card.Text>Alignment: {character.alignment}</Card.Text>
        <Card.Text>Powers: {character.powers}</Card.Text>

        {/* Confirmation message for successful update */}
        {updated && <Alert variant="success">Character updated successfully!</Alert>}

        {/* Edit and Delete functionality */}
        <div className="d-flex justify-content-between">
          <Link to={`/edit/${character.id}`}>
            <Button variant="warning">Edit Character</Button>
          </Link>
          <DeleteCharacter id={character.id} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Character;

