import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Row, Col, Form } from 'react-bootstrap'
import { useCartContext } from '../context/ContextProvider';
import { validateEmail, validateName, validateTel } from '../helpers/validations'
import { ButtonMain, ItemCart } from '../Components';
import { createOrder } from '../services/firebaseService';

const Checkout = () => {
  const { cart, total, setCart } = useCartContext()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    emailConfirm: '',
    tel: '',
  })

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault()

    // Validaciones
    if (!validateName(user.name)) {
      alert("No se pudo finalizar la compra porque el campo Nombre no respeta el formato indicado.")
    } else {
      if (!validateEmail(user.email)) {
        alert("No se pudo finalizar la compra porque el campo Email no respeta el formato indicado.")
      } else {
        if (!validateTel(user.tel)) {
          alert("No se pudo finalizar la compra porque el campo Teléfono no respeta el formato indicado.")
        } else {

          const newOrder = {
            buyer: user,
            items: cart,
            total: total
          }
          const orderCreated = await createOrder(newOrder)
          alert('Gracias por tu compra. Tu n° de compra es: ' + orderCreated.id)
          setCart([])
          navigate('/')
        }
      }
    }

  }


  return (
    <div>
      <Row className='m-5'>
        <Col>
          <Row className='mb-5'>
            <h3>Resumen de tu compra</h3>
          </Row>
          <Row className='mb-5'>
            {cart.map((item) => (
              <Row key={item.id}>
                <ItemCart item={item} />
              </Row>
            ))}
            <Row>
              <h3>Total de la compra: ${total}</h3>
            </Row>
          </Row>
          <Row>
            <Col>
              <Row className='mb-4'>
                <h5>Dejanos tus datos de contacto</h5>
              </Row>
              <Row>
                <form onSubmit={handleSubmit}>
                  <Row className='mb-4'>
                    <Col className='col-3'>
                      <Form.Group className="mb-4">
                        <Form.Label>Nombre *</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          value={user.name}
                          onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                          Debe tener más de 3 carateres.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          value={user.email}
                          onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                          Ej: tumail@mail.com
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Confirmar email *</Form.Label>
                        <Form.Control
                          name="emailConfirm"
                          type="email"
                          value={user.emailConfirm}
                          onChange={handleChange}
                        />
                        {user.email !== user.emailConfirm && (
                          <Form.Text className="text-danger">
                            Tiene que coincidir con el email que ingresaste anteriormente.
                          </Form.Text>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Teléfono *</Form.Label>
                        <Form.Control
                          name="tel"
                          type="number"
                          value={user.tel}
                          onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                          Sin cero en el código de área, ni espacios o guiones.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <ButtonMain type="submit" label="Finalizar compra" />
                    </Col>
                  </Row>
                </form>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row >
    </div >
  )
}

export default Checkout