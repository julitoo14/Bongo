import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

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
           <button className='itemButton' ><Link to={`/item/${props.item.id}`}>Ver Detalles</Link></button> 
        </div>
    );
}

export default Item;