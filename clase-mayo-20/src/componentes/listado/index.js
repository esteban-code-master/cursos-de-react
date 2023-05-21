import React from "react";

export const Listado = ({ lista }) => {
    return(
        <div>
            {
                lista.map((element, index)=> [
                    <li key={index}>{element}</li>
                ])
            }
        </div>
    )
}