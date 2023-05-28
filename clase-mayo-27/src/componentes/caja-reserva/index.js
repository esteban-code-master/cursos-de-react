import React, { useState, useEffect } from "react";
import { Input }  from "../input";
import { Modal } from "../modal"
import { Listado } from "../listado";
import { ListaActividades } from "../actividades";
import { ListaHorarios } from "../horarios";
import { SwichModal } from "../swich-modal";
import './estilos.css'

export const CajaReserva = () => {
    const [open,setOpen] = useState(false)
    const [url_api, setUrl_api] = useState('')
    const [selectTipo,setSelectTipo] = useState('')
    const [selectHorarios,setHorarios] = useState()
    const [activity, setActivity] = useState([])
    const [activiad_seleccionada,setActividadSelecionada] = useState('')   

    function openModal (tipo){
        setSelectTipo(tipo)
        setOpen(true)
    }

    useEffect(function(){
        if(url_api !== ''){
            fetch(url_api, {
                method: 'GET'
            })
            .then(function(data){
                return data.json()
            })
            .then(function(data){
                const horario_selecionado = data.find((item)=> {
                    //console.log('item', item)

                   return item.code_tour === 'B74Y'
                })
                //console.log('lista horarios', horario_selecionado)
                setHorarios(horario_selecionado)
                setActivity(data)
            })
        }
    },[url_api])

    const selecionar_activad = (item) => {
        setActividadSelecionada(item.name)
        console.log(item)
    }

    //JXS
    return (
        <div  className="Caja">
            <div className="header">COTIZA TU RESERVACION</div>
            <div>
                <div>
                    { activiad_seleccionada }
                </div>
                <Input  name="selecciona actividad" evento={()=>{
                    setUrl_api('https://apitours-default-rtdb.firebaseio.com/tours.json')
                    openModal('@tipo/activiades')
                }} />
                <div className="flex">
                    <Input  name="selecciona fecha"/>
                    <Input  name="selecciona horario" evento={()=> {
                        setUrl_api('https://apitours-default-rtdb.firebaseio.com/schedules.json')
                        openModal('@tipo/horarios')
                    }}/>
                </div>
                <Input  name="selecciona participantes" />
            </div>

                    {
               open ? <Modal setOpen= {setOpen}>
                    {/* {
                        selectTipo === '@tipo/activiades' ? <ListaActividades data={activity}/> : null
                    }
                    {
                        selectTipo === '@tipo/horarios' ? <ListaHorarios data={activity} />   : null
                    } */}

                    <SwichModal tipo={selectTipo} data={activity}/>
                </Modal> 
                : null
            }
        </div>
    )
}
