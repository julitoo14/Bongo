import React, { useState } from 'react';
import './Navbar.css';

function Navbar(props) {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className='nav'>
            <div className='navLogo'>
                <img src='bongo-logo.png' alt='logo' />
            </div>
            
            <button className='navButton hamburger' onClick={() => setShowLinks(!showLinks)}>
                <img className='hamburger' src='menu.svg' alt='menu' />
            </button>
            
            <ul className={`navLinks ${showLinks ? 'show' : ''}`}>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Contacto</a></li>
            </ul>
            
            <div className='userAndCart'>
                <button className='navButton'>
                <img onClick={() => alert('user')} className='user' src='user.png' alt='user' />
                </button>
                <button onClick={() => alert('cart')} className='navButton'>
                <img className='cart' src='cart.png' alt='cart' />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;