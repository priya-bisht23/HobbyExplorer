// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import { useAuth } from './Auth/AuthContext'; 

function Navbar() {
  const { isAuthenticated, logout } = useAuth(); 
  return (
    <BootstrapNavbar expand="lg">
      <BootstrapNavbar.Brand as={NavLink} to="/home">HobbyExplorer</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{color:'white'}}>
        {isAuthenticated && (
          <>
          <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/sports">Sports</Nav.Link>
          <Nav.Link as={NavLink} to="/trivia">Guide to Hobby</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          <Button onClick={logout} variant="outline-light">Logout</Button>
          </>
        )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;
