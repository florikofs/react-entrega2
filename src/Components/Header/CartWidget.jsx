import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router';

const CartWidget = () => {

    const [number, SetNumber] = useState(0);

    return (
        <div>
            <Row>
                <Col>
                    <Link to="/cart">
                        <i className="fa-solid fa-cart-shopping text-white p-1"></i>
                        <Badge bg="secondary">{number}</Badge>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default CartWidget;