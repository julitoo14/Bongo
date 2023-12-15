import React from 'react';
import './Item.css';

function Item(props) {

    if (!props.item) {
        return (
            <div className='container'>
                <h1>Producto no encontrado</h1>
            </div>
        );
    }

    return (
        <div className='itemContainer'>
           <h1 className='name'> {props.item.name} </h1>
           <img className='image' src={`${props.item.image}`} alt="" />
           <hr />
           <p className='stock'>Stock Disponible: {props.item.stock}</p>
           <button className='itemButton' >Ver Detalles</button> 
        </div>
    );
}

export default Item;