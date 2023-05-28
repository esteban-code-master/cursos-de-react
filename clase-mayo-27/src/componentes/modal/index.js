import React from "react";
import './estilos.css'

export const Modal  = ({ children, setOpen }) => {

    const modalClose = () => {
        //ref(false)
        setOpen(false)
    }

    return (
        <div className="modal">
            <button className="modal--close" onClick={modalClose}>X</button>
            <div className="modal--content">
                {children}
            </div>
        </div>
    )
} 