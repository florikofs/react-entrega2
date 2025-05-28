
import './App.css'
import { Routes, Route } from 'react-router';
import About  from './Pages/About';
import Cart  from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Error404 from './Pages/Error404';
import { ItemListContainer, ItemDetailContainer, NavBar } from './Components/index';

function App() {
  return (
    <>
      <NavBar />
      <Routes>"
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:category" element={<ItemListContainer/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
        <Route exact path="/checkout" element={<Checkout/>} />
        <Route exact path="*" element={<Error404/>} />
      </Routes>
    </>
  )
}

export default App