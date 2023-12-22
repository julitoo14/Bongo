import React, {useContext} from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart(props) {
    const {cartItems, removeFromCart} = useContext(CartContext);

    

    return (
        <div className='cartContainer'>
            {cartItems.length === 0 ? (
                    <>
                        <h2 style={{textAlign: 'center'}}>Tu Carrito se encuentra vacío</h2>
                        <button className='button'><Link to={'/'} className='link'>Ver Productos</Link></button>
                    </>

            ) : (
                cartItems.map((item, index) => (
                    <div className='item' key={index}>
                        <img className='cartImage' src={`${item.image}`} alt="" />
                        <div>
                            <h2>{item.name}</h2>
                            <p>Cantidad: {item.quantity}</p>
                        </div>
                        <h3>${item.precio}</h3>

                        <button className='removeButton' onClick={ () => removeFromCart(item) }><img className='removeIcon' alt='remove' src='/remove.svg'></img> </button>
                    </div>
    
                ))  
            )}
            
            {cartItems.length > 0 ? (
                <div className='total'>
                    <h2>Total: ${cartItems.reduce((a, c) => a + c.precio * c.quantity, 0)}</h2>
                    <button className='button'><Link to={'/checkout'} className='link'>Finalizar Compra</Link></button>
                </div>
            ) : null}

        </div>
    );
}

export default Cart;