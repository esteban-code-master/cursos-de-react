import React, { useState } from "react";
import { Input }  from "../input";
import { Modal } from "../modal"
import { Listado } from "../listado";
import './estilos.css'

export const CajaReserva = () => {
    const [open,setOpen] = useState(false)
    const [selectTipo,setSelectTipo] = useState([])

    function openModal (lista){
        setSelectTipo(lista)
        setOpen(true)
    }

    const actividades = [
        "actividad 1",
        "actividad 2",
        "actividad 3"
    ]
    
    const horarios = [
        "12:00 pm",
        "12:00 pm",
        "12:00 pm"
    ]

    return (
        <div  className="Caja">
            <div className="header">COTIZA TU RESERVACION</div>
            <div>
                <Input  name="selecciona actividad" evento={()=>{
                    openModal(actividades)
                }} />
                <div className="flex">
                    <Input  name="selecciona fecha"/>
                    <Input  name="selecciona horario" evento={()=> {
                        openModal(horarios)
                    }}/>
                </div>
                <Input  name="selecciona participantes" />
            </div>

            {
               open ? <Modal>
                   <Listado lista={selectTipo} />
                </Modal> 
                : null
            }
        </div>
    )
}
