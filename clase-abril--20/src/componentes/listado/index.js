import React from "react";

export const Listado = ({ lista }) => {
    return(
        <div>
            {
                lista.map((element)=> [
                    <li>{element}</li>
                ])
            }
        </div>
    )
}