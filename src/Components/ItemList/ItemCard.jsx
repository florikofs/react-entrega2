import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCard = ({ product }) => {

  return (
    <Card style={{ width: '18rem' }} className='p-2 m-2'>
      <Card.Img
        src={product.image}
        alt={product.name}
        variant="top"
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle>{product.category}</Card.Subtitle>
        <Card.Text className='m-3'>${product.price}</Card.Text>
        <Button as={Link} to={`/item/${product.id}`} variant="primary">Ver producto</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemCard;