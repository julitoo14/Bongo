import React, {useContext} from 'react';
import ItemCounter from '../ItemCounter/ItemCounter';
import './ItemDetail.css';
import { CartContext } from '../../context/cartContext';


function ItemDetail(props) {

    const {addToCart} = useContext(CartContext);

    const onAdd = (quantityToAdd) => {
        console.log(`Agregando ${quantityToAdd} ${props.item.name} al carrito (ID ${props.item.id})`);
        addToCart(props.item, quantityToAdd);
        
    }

    return (
        <div className='itemDetailContainer'>
            <div>
                <h1 >{props.item.name}</h1>
                <img  src={props.item.image} alt={props.item.name} />
            </div>
            <div className='details'>
                <h2 className='price'>$ {props.item.precio}</h2>
                <h3 className='description'>{props.item.description}</h3>
                <ItemCounter onAdd={onAdd} stock={props.item.stock} />
            </div>

        </div>
    );
}

export default ItemDetail;