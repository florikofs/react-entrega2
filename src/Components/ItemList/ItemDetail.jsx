
import { Row, Col } from 'react-bootstrap';

const ItemDetail = ({ item }) => {

  return (
    <Row>
      <Col className="col-2 me-3">
        <img width={200} src={item.image} alt={item.name} />
      </Col>
      <Col>
          <h6>Categoría: {item.category}</h6>
          <h1>{item.name}</h1>
          <h2>$ {item.price}</h2>
          <p>Precio por unidad sin impuestos</p>
          <h4>Descripción</h4>
          <p>{item.description}</p>
          <p>Stock disponible: {item.stock}</p>
      </Col>
    </Row>
  )
}

export default ItemDetail