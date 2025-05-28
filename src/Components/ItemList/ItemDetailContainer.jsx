import { useParams, Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ErrorCard, ItemDetail, Loader, Counter, ButtonMain } from '../index';
import { useCartContext } from '../../context/ContextProvider';
import { getProductsById } from '../../services/firebaseService.jsx';


const ItemDetailContainer = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [error, setError] = useState('');
  const { cart, setCart } = useCartContext();
  const { id } = useParams();


  //FUNCIONES  
  //Traer datos
  useEffect(() => {
    getProductsById(id)
      .then((res) => {
        if (!res.id) {
          setError('ItemNotFound');
        } else {
          setItem(res);
        }
      })
      .catch((err) => {
        console.error("Error al cargar el producto:", err);
        setError('loadDataError');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);


  //Counter
  const [amount, SetAmount] = useState(1);

  const handleAdd = () => {
    amount < item.stock && SetAmount(amount + 1);
  }

  const handleSubtract = () => {
    amount > 1 && SetAmount(amount - 1);
  }

  const handleAddItem = () => {
    const existing = cart.find(prod => prod.id === item.id);
    
    if (existing) {
    setCart(cart.map(prod =>
      prod.id === item.id
        ? { ...prod, quantity: prod.quantity + amount }
        : prod
    ));
    } else {
    setCart([...cart, { ...item, quantity: amount }])
    SetAmount(1);
  }
};


  //COMPONENTES
  return isLoading ? (<Loader />) : error === 'ItemNotFound' ? (
    <Row className='justify-content-center m-5'>
      <ErrorCard
        title={`El id de producto ${id} no existe`}
        description="Por favor, volvé al listado de productos y seleccioná uno de la lista."
        as={Link}
        to="/"
        label="Ver listado de productos"
      />
    </Row>
  ) : error === 'loadDataError' ? (
    <Row className='justify-content-center m-5'>
      <ErrorCard
        title={`Falló la carga del producto`}
        description="Por favor, volvé intertarlo más tarde."
        as={Link}
        to="/"
        label="Ver listado de productos"
      /> */
    </Row>
  ) :
    <div className='m-5'>
      <Row>
        {item && <ItemDetail item={item} />}
      </Row>
      <Row>
        <Col className="col-6">
          <Row className='mb-3'>
            <Counter amount={amount} handleAdd={handleAdd} handleSubtract={handleSubtract} />
          </Row>
          <Row className='mb-3'>
            <ButtonMain label="Agrear al carrito" onClick={handleAddItem} />
          </Row>
          <Row className='mb-3'>
            <ButtonMain as={Link} to={"/"} variant="info" label="Volver al listado" />
          </Row>
          <Row>
            <ButtonMain as={Link} to={"/cart"} variant="info" label="Ver carrito" />
          </Row>
        </Col>
      </Row>
    </div >
}

export default ItemDetailContainer
