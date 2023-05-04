import React from "react";
import './estilos.css';

export const Home = () => {
    return (
       <div>
            {/* <div className="texto">
                <span>visita</span>
                <span>este</span>
                <span>hogar</span>
            </div> */}
           <div className="contenedor">
                <div className="caja-padre">
                    caja padre
                </div>
                <div className="caja-hijo">
                        caja hijo
                </div>
           </div>
       </div>
    )
}