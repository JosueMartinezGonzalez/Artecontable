import React from 'react'

import { Servicio } from '../Servicio/index'

import contable from '@images/images/OutsourcingContable.jpeg'
import tributario from '@images/images/OutsourcingTributario.jpeg'
import nomina from '@images/images/OutsourcingNomina.jpg'
import './Servicios.css'

function Servicios() {
    return(
        <section className='servicios' name="servicios">
            <div className="servicios--row">
                <div className="servicios--title">
                    <h1>Servicios</h1>
                </div>
                <Servicio
                    title="Outsourcing Contable"
                    image={contable}
                    imageAlt="Un contador trabajando en Outsourcing Contable"
                    text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
                />
            </div>
            <div className="servicios--row">
                <Servicio
                    title="Outsourcing Tributario"
                    image={tributario}
                    imageAlt="Un contador trabajando en Outsourcing Tributario"
                    text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
                />
                <Servicio
                    title="Outsourcing Nomina"
                    image={nomina}
                    imageAlt="Un contador trabajando en Outsourcing Nomina"
                    text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
                />
            </div>
        </section>
    )
}

export { Servicios }