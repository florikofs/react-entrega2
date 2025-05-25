import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const itemsQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                total,
                itemsQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
export const useCartContext = () => useContext(CartContext)