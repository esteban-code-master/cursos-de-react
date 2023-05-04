import React from "react";
import './estilos.css'

export const Modal  = ({ children }) => {

    return (
        <div className="modal">
            {children}
        </div>
    )
} 