import { Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router';
import { useCartContext } from '../../context/ContextProvider';


const CartWidget = () => {

    const { itemsQuantity } = useCartContext()

    return (
        <div>
            <Row>
                <Col>
                    <Link to="/cart">
                        <i className="fa-solid fa-cart-shopping text-white p-1"></i>
                        <Badge bg="secondary">{itemsQuantity}</Badge>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default CartWidget;