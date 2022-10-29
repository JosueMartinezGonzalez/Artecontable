import React from 'react'

import './Ventaja.css'

function Ventaja(props) {
    return(
        <div className='ventaja'>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export { Ventaja }