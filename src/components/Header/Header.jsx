import React from 'react';
import './header.css';

function Header(props) {
    return (
        <div className='top'>
                <h1 className='title'>Bienvenido a Bongo: Descubre el Estilo que Resuena Contigo</h1>
                <div>
                <h3 className='subtitle'>¡Explora la Colección Bongo!</h3>
                <p className='description'>En Bongo, nos apasiona la moda que no solo viste tu cuerpo, sino que también refleja tu personalidad y estilo único. Sumérgete en nuestra exclusiva colección de prendas diseñadas para aquellos que buscan más que simplemente ropa, buscan una declaración de estilo.</p>
                </div>
            </div>
    );
}

export default Header;