import React from 'react'
import './estilos.css'

export const Input = ({ name, evento }) => {
    return (
        <input 
            className='input-container' 
            value= {name} 
            onClick={evento} 
        />
    )
}