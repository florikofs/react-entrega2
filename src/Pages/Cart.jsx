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
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-warning me-2"></i>
            <h4 className="mb-0">Debés seleccionar un ítem del listado de productos.</h4>
          </div>
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
            <h3>Total de la compra: ${total.toFixed(2)}</h3>
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

