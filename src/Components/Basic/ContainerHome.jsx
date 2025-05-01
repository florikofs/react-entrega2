import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tienda from '../../assets/tienda.jpg';
import { ButtonMain, DinamicText } from '../../Components';

const ContainerHome = ({ greeting }) => {
  const [view, setView] = useState(true);

  const handleView = () => {
    setView(!view);
  }

  return (
    <div>
      <Container fluid style={{
        height: '500px',
        backgroundImage: `url(${tienda})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} className="d-flex align-items-center justify-content-center bg-light">
        <Row>
          <Col>
            <h1 className="txtSombra">{greeting}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContainerHome