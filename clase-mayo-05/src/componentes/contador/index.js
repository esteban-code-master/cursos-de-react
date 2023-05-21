import React, { useState } from "react";

// estructura basica de un componente
export const ContadorComponente = () => {
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        //contador = 6 esto no se pude
        setContador (contador + 1)
    }

    const decremento = () => {
        setContador(contador - 1)
    }

    return (
        <div>
           <button onClick={incrementar}>INCREMENTAR CONTADOR</button>
           <button onClick={decremento}>DECREMENTAR CONTADOR</button>
           <div>
                {contador}
           </div>
        </div>
    )
}