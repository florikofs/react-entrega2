import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { loadProducts } from '../helpers/loadProducts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemDetailContainer = ( ) => {

  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    loadProducts()
      .then((res) => {
        const foundItem = res.find(product => product.id === parseInt(id));
        setItem(foundItem);
      }).catch(error => {
        console.log(error)
      })
  }, [id])


  return (
    <Row>
      <Col className="col-2">
        <img width={200} src={item.image} alt={item.name} />
      </Col>
      <Col>
        <h1>{item.name}</h1>
        <h4>Categoría: {item.category}</h4>
        <h3>$ {item.price}</h3>
        <p>{item.description}</p>
      </Col>
    </Row>
  )
}

export default ItemDetailContainer
