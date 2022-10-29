import React from 'react'

import { Ventaja } from '../Ventaja/index'

import './Nosotros.css'

function Nosotros() {
    return(
        <section className='nosotros'>
            <h2>Sobre Nosotros</h2>
            <p>Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            <div className="nosotros--ventajas">
                <Ventaja
                    name="Ventajas"
                    text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. "
                />
                <Ventaja
                    name="Ventajas"
                    text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. "
                />
                <Ventaja
                    name="Ventajas"
                    text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. "
                />
            </div>
        </section>
    )
}

export { Nosotros }