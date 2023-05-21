import React, { useState, useEffect } from "react";
import { Input }  from "../input";
import { Modal } from "../modal"
import { Listado } from "../listado";
import './estilos.css'

export const CajaReserva = () => {
    const [open,setOpen] = useState(false)
    const [selectTipo,setSelectTipo] = useState([])
    const [activity, setActivity] = useState([])
    const [activiad_seleccionada,setActividadSelecionada] = useState('')   

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

    // actividad = []
    // activad = [data]
    useEffect(function(){
        //console.log('ejecutando efecto...')
        // apis rest 
        fetch('https://apitours-default-rtdb.firebaseio.com/tours.json', {
            method: 'GET'
        })
        .then(function(data){
            return data.json()
        })
        .then(function(data){
            // actividad = []
            //actividades = data esto no se puede
            //console.log('get api ==>',data)
            setActivity(data)
        })

    },[])

    useEffect(()=>{
        //console.log('ejecutando segundo efecto...', activity)

        if(activity.length > 0){
            console.log('ejecutando segundo efecto...', activity)
        }
    },[activity])


    const selecionar_activad = (item) => {
        setActividadSelecionada(item.name)
        console.log(item)
    }


    return (
        <div  className="Caja">
            <div className="header">COTIZA TU RESERVACION</div>
            <div>
                <div>
                    { activiad_seleccionada }
                </div>
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
               open ? <Modal setOpen= {setOpen}>
                   {/* <Listado lista={selectTipo} /> */}
                    {
                        // funcion tipo arrow function
                        activity.map((item)=> [
                            <div key='1'>
                                <button  onClick={()=> {
                                    selecionar_activad(item)
                                }} >{item.name}</button>
                            </div>
                        ])
                    }
                </Modal> 
                : null
            }
        </div>
    )
}
