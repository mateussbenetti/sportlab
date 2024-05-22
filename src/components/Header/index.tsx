import React from 'react';
import './styles.css'

const Header: React.FC  = () => {
    return(
        <header>
            <h2 className='poetsen-one-regular' id='header-logo'>SportLab</h2>
            <nav>
                <ul>
                    <li><a href="#" className='poetsen-one-regular'>Home</a></li>
                    <li><a href="#" className='poetsen-one-regular'>Serviços</a></li>
                    <li><a href="#" className='poetsen-one-regular'>Perfil</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;