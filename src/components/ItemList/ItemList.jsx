import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList(props) {
    const [items, setItems] = useState([]);

    const getItems = async () => {
        setInterval(() => {
            setItems([{
                id: 1,
                name: 'Remera Bongo',
                image: 'https://srv.latostadora.com/image/jumping_border_collie--id:505ddda3-1c9a-4e75-a92f-7923fe8e0361;s:H_J1;b:f2f2f2;w:334;f:f;i:13562370872113562321241.jpg',
                stock: 10
            
            },
            {
                id: 2,
                name: 'Remera Nirvana',
                image: 'https://acdn.mitiendanube.com/stores/001/029/315/products/remera-nirvana-face-nevada1-cf5f3794b17bf8d64016694753487398-640-0.jpg',
                stock: 5
            
            },
            {
                id: 3,
                name: 'Remera Feid',
                image: 'https://lushnessuy.com/cdn/shop/files/FERXXOINTERSHIBUYA.jpg?v=1684202968&width=1946',
                stock: 12
            },
            {
                id: 4,
                name: 'Remera Hasbulla',
                image: 'https://cdn.shopify.com/s/files/1/0760/5924/6885/files/HASBULLA.jpg?v=1684203010&width=533',
                stock: 8
            },
            {
                id: 5,
                name: 'Remera The Beatles',
                image: 'https://acdn.mitiendanube.com/stores/001/029/315/products/the-beatles-remera-negra1-0d57d68665f578343a16694751189157-640-0.jpg',
                stock: 15
            }]);
        }, 2000);
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div className='itemsContainer'>
            {items.map((item) => {
                return <Item item={item} />
            })}
        </div>
    );
}

export default ItemList;