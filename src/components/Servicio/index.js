import React from 'react'

import './Servicio.css'

function Servicio(props) {
    return(
        <section className='servicio'>
            <div className="servicio--title">
                <h2>{props.title}</h2>
                <div className="servicio--title__img">
                    <img src={props.image} alt={props.imageAlt} />
                </div>
            </div>
        </section>
    )
}

export { Servicio }