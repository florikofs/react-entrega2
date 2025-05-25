
import './App.css'
import { Routes, Route } from 'react-router';
import About  from './pages/About';
import Cart  from './pages/Cart';
import Checkout from './pages/Checkout';
import Error404 from './pages/Error404';
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