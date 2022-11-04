import React, { useState } from 'react'

import './Servicio.css'

function Servicio(props) {

    const [propiedad, setPropiedad] = useState({
        clase: 'servicio'
    })

    const handleHover = (option) => {
        if(option === 'on') {
            setPropiedad({
                clase: 'servicioHover'
            })
        } else if(option === 'off') {
            setPropiedad({
                clase: 'servicio'
            })
        }
    }

    return(
        <div className={propiedad.clase} onMouseEnter={()=> { handleHover('on') }} onMouseLeave={()=> { handleHover('off') }}>
            <div className="servicio--title">
                <h2>{props.title}</h2>
                <div className="servicio--title__text">
                    <p>{props.text}</p>
                </div>
                <div className="servicio--title__img">
                    <img src={props.image} alt={props.imageAlt} />
                </div>
            </div>
        </div>
    )
}

export { Servicio }