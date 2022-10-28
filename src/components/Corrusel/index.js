import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Corrusel.css'

import image1 from '@images/images/Hero.png'

function Corrusel() {
    return(
        <section className="carousel">
            <Carousel autoPlay infiniteLoop swipeable useKeyboardArrows showStatus={false} showThumbs={false}>
                <img src={image1} alt="Imagen de un contador trabajando" />
                <img src={image1} alt="Imagen de un contador trabajando" />
                <img src={image1} alt="Imagen de un contador trabajando" />
                <img src={image1} alt="Imagen de un contador trabajando" />
                <img src={image1} alt="Imagen de un contador trabajando" />
            </Carousel>
        </section>
    )
}

export { Corrusel }