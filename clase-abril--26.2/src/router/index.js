import React from "react";
import { Home } from '../pages/home'
import { Contactanos } from '../pages/contactanos'
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";

export const SettingRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="links">
                    <Link to="/contactanos">contactanos</Link>
                    <Link to="/">home</Link>
                </div>
               <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/contactanos" Component={Contactanos} />
               </Routes>
            </BrowserRouter>
        </div>
    )
}
