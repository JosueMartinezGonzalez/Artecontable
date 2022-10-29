import React from 'react'

import { Servicio } from '../Servicio/index'

import contable from '@images/images/OutsourcingContable.jpeg'
import tributario from '@images/images/OutsourcingTributario.jpeg'
import nomina from '@images/images/OutsourcingNomina.jpg'
import './Servicios.css'

function Servicios() {
    return(
        <section className='servicios'>
            <div className="servicios--row">
                <div className="servicios--title">
                    <h1>Servicios</h1>
                </div>
                <Servicio
                    title="Outsourcing Contable"
                    image={contable}
                    imageAlt="Un contador trabajando en Outsourcing Contable"
                />
            </div>
            <div className="servicios--row">
            <Servicio
                title="Outsourcing Tributario"
                image={tributario}
                imageAlt="Un contador trabajando en Outsourcing Tributario"
            />
            <Servicio
                title="Outsourcing Nomina"
                image={nomina}
                imageAlt="Un contador trabajando en Outsourcing Nomina"
            />
            </div>
        </section>
    )
}

export { Servicios }