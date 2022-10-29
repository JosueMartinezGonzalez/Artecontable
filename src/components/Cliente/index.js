import React from 'react'

import './Cliente.css'

function Cliente(props) {
    return(
        <div className='cliente'>
            <img src={props.image} alt={props.imageAlt} />
            <h4>{props.name}</h4>
        </div>
    )
}

export { Cliente }