import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import CartProvider from './context/ContextProvider.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
    <CartProvider>
        <App />
    </CartProvider>
      </BrowserRouter>
  </StrictMode>,
)
