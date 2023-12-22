import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, quantity) => {
        const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);

        if (existingCartItem) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + quantity }
                    : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }
    };

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    };
    
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};