
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { ButtonMain } from '../index';

const ItemCart = ({ item }) => {

    return (
        <>
            <Row className='my-3'>
                <Col className='me-2 col-1'>
                    <img width={100} src={item.image} alt={item.name} />
                </Col>
                <Col>
                    <h4>{item.name}</h4>
                    <h5>${item.price}</h5>
                    <h5>Cantidad: {item.quantity}</h5>
                    <h5>Subtotal: ${item.quantity * item.price}</h5>
                </Col>
            </Row>
        </>
    )
}


export default ItemCart