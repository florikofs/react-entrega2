
// import './App.css'
import { NavBar } from './Components/index.js';
import { ItemListContainer } from './Components/index.js';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Te damos la bienvenida a nuestra tienda!"/>
    </>
  )
}

export default App