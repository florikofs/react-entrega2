import React from 'react'
import { ItemListContainer, ContainerHome } from '../Components';

function Home() {
  return (
    <div>
      <ContainerHome greeting="¡Te damos la bienvenida a nuestra tienda!"/>
      <ItemListContainer />
    </div>
  )
}

export default Home