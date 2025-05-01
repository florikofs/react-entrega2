import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { loadProducts } from '../helpers/loadProducts';
import ItemList from '../Components/ItemList/ItemList';


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    loadProducts()
      .then((res) => {
        setProducts(res);
      }).catch(error => {
        console.log(error)
      })
  }, [])

  const filterList = category ? products.filter((e) => e.category.includes(category)) : products
  console.log("FilterdList", filterList)

  return (
    <ItemList products={filterList} />
  )
}

export default ItemListContainer