import React from 'react';
import ReactDOM from 'react-dom/client';
//import { ContadorComponente } from './componentes/contador/index'
import { CajaReserva } from './componentes/caja-reserva';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CajaReserva />
  </React.StrictMode>
);