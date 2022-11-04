import React from 'react'

import { Cliente } from '../Cliente/index'

import mapaxLogo from '@images/images/LogoMapaXs.png'
import './Clientes.css'

function Clientes() {
    return(
        <section className='clientes' name="clientes">
            <h2>Nuestros Clientes</h2>
            <div className="clientes--content">
                <Cliente
                    name="MapaX SAS"
                    image={mapaxLogo}
                    imageAlt="Logo de MapaX"
                />
                <Cliente
                    name="MapaX SAS"
                    image={mapaxLogo}
                    imageAlt="Logo de MapaX"
                />
                <Cliente
                    name="MapaX SAS"
                    image={mapaxLogo}
                    imageAlt="Logo de MapaX"
                />
            </div>
        </section>
    )
}

export { Clientes }