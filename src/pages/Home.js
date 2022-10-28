import React from 'react'


import { HeaderInfo } from '../components/HeaderInfo/index'
import { Header } from '../components/Header/index'
import { Corrusel } from '../components/Corrusel/index'
import { Footer } from '../components/Footer/index'


function Home() {
    return(
        <div>
            <HeaderInfo />
            <Header />
            <main>
            <Corrusel />

            </main>
            <Footer />
        </div>
    )
}

export { Home }