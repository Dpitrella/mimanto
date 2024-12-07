
import React from 'react'
import './Header.css'
import logo from '../../assents/logos/logo.png'
import name from '../../assents/logos/name.png'


function Header () {
    
    return (
        <div className='header-content'>
            <div className='img-logo'>
                <img src={logo} />
            </div>
            <div className='name'>
                <img src={name} alt="mimanto biocosmetica" />
            </div>
            <nav>
            <a className='inicio' href='#'>INICIO</a>
            <a className='comprar'href='#'>COMPRAR</a>
            <a className='contacto' href='#'>CONTACTO</a>
            </nav>
        </div>
    )
}
export default Header