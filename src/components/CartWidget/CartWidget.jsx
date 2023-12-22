import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

function CartWidget(props) {
    const {cartItems} = useContext(CartContext);
    const totalItems = cartItems.reduce((a, c) => a + c.quantity, 0);
    return (
        <Link to={'/cart'}>
            <img className='cart' src='/cart.png' alt='cart' />
            <div className='totalItems'>{totalItems}</div>
        </Link>
    );
}

export default CartWidget;