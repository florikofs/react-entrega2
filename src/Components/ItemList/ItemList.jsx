import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { ItemCard } from '../index.js';


const ItemList = ({ products }) => {

    return (
        <Container>
                <Row className="m-3 justify-content-center">
                    {products.map((e) =>
                        <Col xs={12} sm={6} md={4} lg={3} key={e.id} className="mb-4 d-flex justify-content-center">
                            <ItemCard product={e} />
                        </Col>
                    )}
                </Row>
        </Container>
    )
}

export default ItemList