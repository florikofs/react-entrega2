import ItemCard from './ItemCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const ItemList = ({ products }) => {


    return (
        <div>
            <Container className="w-60 mx-auto text-center py-5 sm-6">
                <Row className='mb-4'>
                    <h1>Listado de productos</h1>
                </Row>
                <Row className="justify-content-start align-content-around">
                    { products.map((e) => <ItemCard product={e} key={e.id} />) }
                </Row>
            </Container>
        </div>
    )
}

export default ItemList