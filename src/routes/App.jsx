import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

import '../pages/responsive/Laptop.css'
import '../pages/responsive/Tablet.css'
import '../pages/responsive/Mobile.css'
import './global.css'

import { Home } from '../pages/Home'


const App = () => {
    return (
        <div>
            <Home />
            <a className='button--WhatsApp' href="https://api.whatsapp.com/send?phone=573008671485" target="_blank">
                <span><FaWhatsapp /></span>
            </a>
        </div>
    )
}


export { App }