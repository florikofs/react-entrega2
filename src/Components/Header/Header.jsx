import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { CartWidget } from '../../Components';

const Header = () => {
  return <div>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">AURA DECO</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#estilos">Estilos</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
          <CartWidget />
      </Container>
    </Navbar>
  </div>
}

export default Header