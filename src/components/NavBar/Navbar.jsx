import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function Navbar(props) {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav className='nav'>
            <div className='navLogo'>
                <img src='/bongo-logo.png' alt='logo' />
            </div>
            
            <button className='navButton hamburger' onClick={() => setShowLinks(!showLinks)}>
                <img className='hamburger' src='/menu.svg' alt='menu' />
            </button>
            
            <ul className={`navLinks ${showLinks ? 'show' : ''}`}>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/category/remeras'>Remeras</Link></li>
                <li><Link to='/category/buzos'>Buzos</Link></li>
                <li><Link to='/category/gorras'>Gorras</Link></li>
            </ul>
            
            <div className='userAndCart'>
                <button className='navButton'>
                <img onClick={() => alert('user')} className='user' src='/user.png' alt='user' />
                </button>
                <CartWidget />

            </div>
        </nav>
    );
}

export default Navbar;