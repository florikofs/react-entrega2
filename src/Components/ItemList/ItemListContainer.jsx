import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { ItemList, HomeContainer } from '../index';
import { getProducts } from '../../services/firebaseService.jsx';


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts()
    .then((res) => {
      setProducts(res);
    }).catch(error => {
      console.log(error)
    })
  }, [])
  
  const filterList = category ? products.filter((e) => e.category.includes(category)) : products
  
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" &&
        <HomeContainer greeting="¡Te damos la bienvenida a nuestra tienda!" />
      }
      <ItemList products={filterList} />
    </>
  )
}

export default ItemListContainer