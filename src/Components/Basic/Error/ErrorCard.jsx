import { Button, Card } from 'react-bootstrap';

const ErrorCard = ( {title, description, onClick, label, as, to} ) => {
  return (
    <Card border='danger' style={{ width: '32rem' }} className='g-0 text-center'>
      <Card.Header>Ocurrió un problema</Card.Header>
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button as={as} to={to} variant="primary" onClick={onClick}>{label}</Button>
      </Card.Body>
    </Card>
  )
}

export default ErrorCard