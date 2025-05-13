// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/characters')
      .then(response => {
        setCharacters(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load characters');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Row>
      {characters.map(character => (
        <Col key={character.id} md={4}>
          <Card>
            <Card.Img variant="top" src={character.image_url} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>{character.alias}</Card.Text>
              <Link to={`/characters/${character.id}`}>
                <Button variant="primary">View Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Home;
