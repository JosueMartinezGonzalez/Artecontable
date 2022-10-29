import React from 'react'


import { HeaderInfo } from '../components/HeaderInfo/index'
import { Header } from '../components/Header/index'
import { Corrusel } from '../components/Corrusel/index'
import { Servicios } from '../components/Servicios/index'
import { Nosotros } from '../components/Nosotros/index'
import { Clientes } from '../components/Clientes/index'
import { Contacto } from '../components/Contacto/index'
import { Footer } from '../components/Footer/index'


function Home() {
    return(
        <div>
            <HeaderInfo />
            <Header />
            <main>
                <Corrusel />
                <Servicios />
                <Nosotros />
                <Clientes />
                <Contacto />
            </main>
            <Footer />
        </div>
    )
}

export { Home }