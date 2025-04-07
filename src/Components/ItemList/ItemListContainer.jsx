import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tienda from '../../assets/tienda.jpg';

function ItemListContainer({ greeting }) {
  return <div>
    <Container fluid style={{
      height: '500px',
      backgroundImage: `url(${tienda})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }} className="d-flex align-items-center justify-content-center bg-light">
      <Row>
        <Col className="text-center text-white">
          <h1 style={{ textShadow: '0px 0px 9px rgba(0, 0, 0, 8)' }}>{greeting}</h1>
        </Col>
      </Row>
    </Container>
    </div>
}

export default ItemListContainer