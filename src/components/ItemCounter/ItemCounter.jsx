import React, { useState } from 'react';
import './ItemCounter.css';

function ItemCounter(props) {

    const [counter, setCounter] = useState(1);
    
    const increment = () => {
        if (counter < props.stock) {
            setCounter(counter + 1);
        }
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className='container'>
            <p className='stock'>{props.stock} disponibles</p>
            <div className='counterContainer'>
            <button className={`button ${counter === 1 ? 'disabled' : ''}`} onClick={decrement}>-</button>
            <span className='counter'>{counter}</span>
            <button className={`button ${counter >= props.stock ? 'disabled' : ''}`} onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default ItemCounter;