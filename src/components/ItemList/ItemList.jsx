import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import { useParams } from 'react-router-dom';

function ItemList(props) {
    const [items, setItems] = useState([]);
    const {category} = useParams();
    



    useEffect(() => {

        const itemsDb = [{
            id: 1,
            name: 'Remera Bongo',
            image: 'https://srv.latostadora.com/image/jumping_border_collie--id:505ddda3-1c9a-4e75-a92f-7923fe8e0361;s:H_J1;b:f2f2f2;w:334;f:f;i:13562370872113562321241.jpg',
            stock: 10,
            description: "Remera Jumping con estampa de Border Collie",
            category: 'remeras',
            precio: 18000
        },
        {
            id: 2,
            name: 'Remera Nirvana',
            image: 'https://acdn.mitiendanube.com/stores/001/029/315/products/remera-nirvana-face-nevada1-cf5f3794b17bf8d64016694753487398-640-0.jpg',
            stock: 5,
            description: "Remera con estampa de Nirvana",
            category: 'remeras',
            precio: 15000
        
        },
        {
            id: 3,
            name: 'Remera Feid',
            image: 'https://lushnessuy.com/cdn/shop/files/FERXXOINTERSHIBUYA.jpg?v=1684202968&width=1946',
            stock: 12,
            description: "Remera con estampa de Feid",
            category: 'remeras',
            precio: 20000
    
        },
        {
            id: 4,
            name: 'Remera Hasbulla',
            image: 'https://cdn.shopify.com/s/files/1/0760/5924/6885/files/HASBULLA.jpg?v=1684203010&width=533',
            stock: 8,
            description: "Remera con estampa de Hasbulla",
            category: 'Remeras',
            precio: 25000
        },
        {
            id: 5,
            name: 'Remera The Beatles',
            image: 'https://acdn.mitiendanube.com/stores/001/029/315/products/the-beatles-remera-negra1-0d57d68665f578343a16694751189157-640-0.jpg',
            stock: 15,
            description: "Remera con estampa de The Beatles",
            category: 'remeras',
            precio: 20000
        },
        {
            id: 6,
            name: 'Buzo Nirvana',
            image: 'https://acdn.mitiendanube.com/stores/944/335/products/nirvana-31-c434e4564d99b5976c16098801678111-480-0.jpg',
            stock: 5,
            description: "Buzo con estampa de Nirvana",
            category: 'buzos',
            precio: 35000
        },
        {
            id: 7,
            name: 'Buzo The Beatles',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhgOLaFWiPZyMjsE5EYqeI437PMR5FqrxcZJ2FVFt7amcIbDLbEICxPqshwoR4T8Xhh4&usqp=CAU',
            stock: 10,
            description: "Buzo con estampa de The Beatles",
            category: 'buzos',
            precio: 40000
        },
        {
            id: 8,
            name: 'Buzo Feid',
            image: 'https://http2.mlstatic.com/D_NQ_NP_791611-CBT70547188334_072023-O.webp',
            stock: 7,
            description: "Buzo con estampa de Feid",
            category: 'buzos',
            precio: 45000
        },
        {
            id: 9,
            name: 'Gorra Nirvana',
            image: 'https://acdn.mitiendanube.com/stores/001/473/111/products/gorra-plana-snapback-nirvana-n1-48490f89547c60324b16851145163164-1024-1024.jpg',
            stock: 3,
            description: "Gorra con estampa de Nirvana",
            category: 'gorras',
            precio: 10000
        },
        {
            id:10,
            name: 'Gorra The Beatles',
            image: 'https://http2.mlstatic.com/D_NQ_NP_685792-MLA70904619592_082023-O.webp',
            stock: 2,
            description: "Gorra con estampa de The Beatles",
            category: 'gorras',
            precio: 12000
        },
        {
            id: 11,
            name: 'Gorra Feid',
            image: 'https://http2.mlstatic.com/D_NQ_NP_752930-MCO54223280424_032023-O.webp',
            stock: 5,
            description: "Gorra con estampa de Feid",
            category: 'gorras',
            precio: 15000
        },
        {
            id: 12,
            name: 'Gorra Hasbulla',
            image: 'https://i.etsystatic.com/38276559/r/il/873744/4353145819/il_570xN.4353145819_mw0h.jpg',
            stock: 4,
            description: "Gorra con estampa de Hasbulla",
            category: 'gorras',
            precio: 20000
        }    
    ]    

        const getItems = () => {       
            if (category) {
                setItems(itemsDb.filter((item) => item.category === category));
            }else{
                setItems(itemsDb);
            }
        }

        getItems();
    }, [category]);

    return (
        <div className='itemsContainer'>
            {items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    );
}

export default ItemList;