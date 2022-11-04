import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

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
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <header className={'header '+clase.cls}>
            <div className="header--logo">
                <img src={logo} alt="Logo de Arte Contable" />
            </div>
            <nav className="header--menu">
                <ul>
                    <li><Link href="#" smooth={true} offset={-135} to="servicios">Servicios</Link></li>
                    <li><Link href="#" smooth={true} offset={-135} to="nosotros">Nosotros</Link></li>
                    <li><Link href="#" smooth={true} offset={-135} to="clientes">Nuestros Clientes</Link></li>
                    <li className='header--menu__contacto'><Link href="#" smooth={true} to="contacto">Contactanos</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export { Header }