// src/components/CreateCharacter.js
import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateCharacter = () => {
  const [formData, setFormData] = useState({
    name: '',
    alias: '',
    alignment: '',
    powers: '',
    image_url: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('http://127.0.0.1:5000/characters', formData)
      .then((response) => {
        setLoading(false);
        navigate(`/characters/${response.data.id}`);
      })
      .catch((err) => {
        setLoading(false);
        setError('Failed to create character');
      });
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
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
      <Button variant="primary" type="submit">Create Character</Button>
    </Form>
  );
};

export default CreateCharacter;
