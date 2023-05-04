import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";

export const  App = ()=> {
  return (
    <Router>
        <div>
            <Link to='/about'>about</Link>
            <Link to='/'>home</Link>
        </div>
        <Routes>
          <Route path="/about" Component={About} />
          <Route path="/" Component={Home} />
          <Route path="*" element={<div>not found</div>}/>
        </Routes>
    </Router>
  );
}