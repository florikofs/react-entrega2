
import './App.css'
import { ItemListContainer, NavBar } from './Components';
import { Routes, Route } from 'react-router';
import Home  from './Pages/Home';
import About  from './Pages/About';
import Cart  from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Error404 from './Pages/Error404';
import ItemDetailContainer from './Pages/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>"
        <Route exact path="/" element={<Home/>} />
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