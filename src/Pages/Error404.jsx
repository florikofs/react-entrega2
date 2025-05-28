import { Row } from 'react-bootstrap'
import { Link } from 'react-router'
import { ButtonMain } from '../Components'

function Error404() {
  return (
    <div className='m-5'>
      <Row>
        <h2>Error404</h2>
        <h4>No se encontró la página.</h4>
      </Row>
      <Row className='mt-3'>
        <ButtonMain as={Link} to={"/"} label="Ver listado de productos" />
      </Row>
    </div>
  )
}

export default Error404