
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ButtonMain } from '../index.js';

const Counter = ({ amount, handleAdd, handleSubtract }) => {

    return (
        <div>
            <Row>
                <Col sm={1}>
                    <ButtonMain onClick={handleSubtract} variant="primary" label="-" />
                </Col>
                <Col className="text-center" sm={1}>
                    <h3>{amount}</h3>
                </Col>
                <Col sm={1}>
                    <ButtonMain onClick={handleAdd} variant="primary" label="+" />
                </Col>
            </Row>
        </div>
    )
}

export default Counter;