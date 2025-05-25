import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { useCartContext } from '../context/ContextProvider';
import { ButtonMain, ItemCart } from '../Components';

function Cart() {
  const { cart, total } = useCartContext()

  return (
    <div className='m-5'>
      <Row className='mb-2'>
        <h2>Mi carrito</h2>
      </Row>
      {cart.length == 0 ? (
        <>
          <Row>
            <Col className="col-1">
              <i className="fa-solid fa-warning"></i>
            </Col>
            <Col>
              <h4>Debés seleccionar un ítem del listado de productos.</h4>
            </Col>
          </Row>
          <Row className='mt-3'>
            <ButtonMain as={Link} to={"/"} label="Ver listado" />
          </Row>
        </>
      ) : (
        <div>
          {cart.map((item) => (
            <Row key={item.id}>
              <ItemCart item={item} />
            </Row>
          ))}
          <Row>
            <h3>Total de la compra: ${total}</h3>
          </Row>
          <Row className='my-3'>
            <ButtonMain as={Link} to={"/checkout"} label="Comprar" />
          </Row>
          <Row className='mb-3'>
            <ButtonMain as={Link} to={"/"} variant="info" label="Seguir agregando productos" />
          </Row>
        </div>
      )}
    </div>
  )
}

export default Cart

