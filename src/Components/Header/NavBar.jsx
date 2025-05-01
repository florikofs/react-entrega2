import React from 'react'
import { Link } from 'react-router';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { CartWidget } from '../../Components';

const NavBar = () => {
  return (
    <nav>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">AURA DECO</Navbar.Brand>
          <Nav className="me-auto">

            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/velas">Velas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/textiles">Textiles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/fragancias">Fragancias para el hogar</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/about">About</Nav.Link>

          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </nav>
  )
}

export default NavBar