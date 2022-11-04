import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaWindowClose } from 'react-icons/fa'

import logo from '@images/images/logo.jpeg'

import './HeaderBurger.css'

const HeaderBurger = () => {

    const [active, setActive] = useState(
        {
            menu: 'none'
        }
    )
    const [clase, setClase] = useState({
        cls: ''
    })

    const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 95 ){
        setClase({cls:'stik'})
    } else{
        setClase({cls:''})
    }
    }

    const handleClick = (option) => {
        if(option === 'on') {
            setActive({
                menu: 'headerBurger--nav'
            })
        } else if(option === 'off') {
            setActive({
                menu: 'none'
            })
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <header className={"headerBurger "+clase.cls}>
            <div className="headerBurger--menu">
                <div className="headerBurger--menu__logo">
                    <img src={logo} alt="Logo de Arte Contable" />
                </div>
                <span onClick={() => {handleClick('on')}}><FaBars /></span>
            </div>
            <nav className={active.menu }>
                <ul>
                    <span onClick={() => {handleClick('off')}}><FaWindowClose /></span>
                    <li><Link href="#" smooth={true} offset={-135} to="servicios">Servicios</Link></li>
                    <li><Link href="#" smooth={true} offset={-135} to="nosotros">Nosotros</Link></li>
                    <li><Link href="#" smooth={true} offset={-135} to="clientes">Nuestros Clientes</Link></li>
                    <li className='headerBurger--menu__contacto'><Link href="#" smooth={true} to="contacto">Contactanos</Link></li>
                </ul>
            </nav>
        </header>
    )
}


export { HeaderBurger }