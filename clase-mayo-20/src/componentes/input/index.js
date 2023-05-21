import React, { useState } from 'react'
import './estilos.css'

export const Input = ({ name = '', evento }) => {
    
    const [value,setValue] = useState(name)

    return (
        <div>
            <input 
                className='input-container' 
                value= {value} 
                onClick={evento}
                onChange={()=> setValue(name)} 
            />
        </div>
    )
}