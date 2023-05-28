import React from "react";

export const ListaHorarios = ({ data = [] }) => {
    return(
        <div>
            {
                data.map((item)=> [
                    item.schedules?
                    item.schedules.map((schedules)=>[
                        <div key='1'>
                            <button  onClick={()=> {
                            }} >{schedules.hour}</button>
                        </div>
                    ]): null
                ])
            }
        </div>
    )
}