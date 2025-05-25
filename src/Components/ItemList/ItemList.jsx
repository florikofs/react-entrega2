import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { ItemCard } from '../index.js';


const ItemList = ({ products }) => {

    return (
        <Container className="d-flex justify-content-center">
                <Row className="g-1 m-3">
                    {products.map((e) =>
                        <Col sm={3} key={e.id} className='text-center'>
                            <ItemCard product={e} />
                        </Col>
                    )}
                </Row>
        </Container>
    )
}

export default ItemList