import React from 'react'
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='footer--menu'>
                <ul className='footer--menu__content'>
                    <li><a href="#">Contactanos</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Términos y Condiciones</a></li>
                </ul>
                <ul className='footer--menu__content'>
                    <li><a href="#"><FaLinkedin /></a></li>
                    <li><a href="#"><FaFacebookF /></a></li>
                </ul>
                <p>Derechos Reservados &copy; 2022 Arte Contable</p>
            </nav>
        </footer>
    )
}


export { Footer }