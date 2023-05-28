import React from "react";
import { ListaActividades } from "../actividades";
import { ListaHorarios } from "../horarios";

export const SwichModal = ({ tipo, data }) => {
    if(tipo === '@tipo/activiades'){
        return <ListaActividades data={data}/>
    }

    if(tipo === '@tipo/horarios'){
        return <ListaHorarios data={data}/>
    }
}