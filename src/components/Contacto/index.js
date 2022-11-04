import React from 'react'

import contactoImg from '@images/images/Contac.jpg'

import './Contacto.css'

function Contacto() {

    // const initialState = { name: '', email: '', mensaje: '' }

    // const [body, setBody] = useState(initialState)


    // const onSend = async () => {
    //     event.preventDefault();
    //     if(body.name != '' && body.email != '' && body.mensaje != '') {
    //         try {
    //             const { data } = await axios.post('https://bmx-tayrona-api.herokuapp.com/api/recovery', body)
    //             setBody(initialState)
    //             alert('Se envió con éxito')
    //         } catch (error) {
    //             console.log(error)
    //             alert('Opps... ocurrió un error')
    //         }
    //     } else {
    //         alert('Todos los campos deben estar llenos')
    //     }
    // }


    // const handleChange = ({ target }) => {
    //     const { name, value } = target
    //     setBody({
    //         ...body,
    //         [name]: value
    //     })
    // }

    return(
        <section className='contacto' name="contacto">
            <div className="contacto--image">
                <img src={contactoImg} alt="Imagen de una persona escribiendo" />
            </div>
            <div className="contacto--form">
                <h2>Contactanos</h2>
                <form action="" method="get">
                    <label>Nombre</label>
                    <input required type="text" name='name' placeholder='Tu nombre' />
                    <label>Email</label>
                    <input required type="email" name='email' placeholder='tucorreo@mail.com' />
                    <label>Teléfono</label>
                    <input required type="phone" name='phone' placeholder='3001236540' />
                    <label>¿En que te podemos ayudar?</label>
                    <textarea required type="text" name='mensaje' placeholder='Escribe tu mensaje...' />
                    <button type='submit'>Enviar</button>
                </form>
                {/* <form action="" method="get">
                    <label>Tu Nombre</label>
                    <input required type="text" onChange={handleChange} name='name'  placeholder='Carlos Ortiz' />
                    <label>Tu Email</label>
                    <input required type="email" onChange={handleChange} name='email' value={body.email} placeholder='tucorreo@mail.com' />
                    <label>Mensaje</label>
                    <textarea required type="text" onChange={handleChange} name='mensaje' value={body.mensaje} placeholder='Escribe tu mensaje...' />
                    <button onClick={ () => { onSend() } } type='submit'>Enviar</button>
                </form> */}
            </div>
        </section>
    )
}

export { Contacto }