// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

// Import Components
import Home from './components/Home';
import Character from './components/Character';
import CreateCharacter from './components/CreateCharacter';
import EditCharacter from './components/EditCharacter';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Marvel Characters</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/create">Create Character</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="/create" element={<CreateCharacter />} />
          <Route path="/edit/:id" element={<EditCharacter />} />
          <Route path="*" element={<NotFound />} /> {/* 404 page */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
