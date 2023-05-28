import React from "react";

export const ListaActividades = ({ data }) => {
    return(
        <div>
            {
                data.map((item)=> [
                    <div key='1'>
                        <button  onClick={()=> {
                            //selecionar_activad(item)
                        }} >{item.name}</button>
                    </div>
                ])
            }
        </div>
    )
}