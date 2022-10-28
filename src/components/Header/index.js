import React, { useState, useEffect } from 'react'

import logo from '@images/images/logo.jpeg'

import './Header.css'

const Header = () => {

    const [clase, setClase] = useState({
        cls: ''
    });
    const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 45 ){
        setClase({cls:'stik'})
        }
        else{
            setClase({cls:''})
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    return (
        <header className={'header '+clase.cls}>
            <div className="header--logo">
                <img src={logo} alt="Logo de Arte Contable" />
            </div>
            <nav className="header--menu">
                <ul>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Nuestros Clientes</a></li>
                    <li className='header--menu__contacto'><a href="">Contactanos</a></li>
                </ul>
            </nav>
        </header>
    )
}


export { Header }