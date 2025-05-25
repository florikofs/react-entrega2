import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import tienda from '../../assets/tienda.jpg';


const HomeContainer = ({ greeting }) => {

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
      <Row className='mt-5 mb-0 text-center'>
          <h2>Listado de productos</h2>
        </Row>
    </div>
  )
}

export default HomeContainer