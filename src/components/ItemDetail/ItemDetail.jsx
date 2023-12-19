import React from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import './ItemDetail.css';

function ItemDetail(props) {
    return (
        <div className='itemDetailContainer'>
            <div>
                <h1 >{props.item.name}</h1>
                <img  src={props.item.image} alt={props.item.name} />
            </div>
            <div className='details'>
                <h2 className='price'>$ {props.item.precio}</h2>
                <h3 className='description'>{props.item.description}</h3>
                <ItemCounter stock={props.item.stock} />
                <button className='itemDetailButton'>Agregar al carrito</button>
            </div>

        </div>
    );
}

export default ItemDetail;