import React from "react";
import { Categorias } from '../middleware/Categorias';
import { Proveedores } from '../middleware/Proveedores';
import { Inicio } from '../components/Sections/Inicio';
import { Contacto } from '../middleware/Contacto';

import {
  BrowserRouter as Router,
  Route,             
  Routes, 
} from 'react-router-dom';


export default function AppRouter() {

  return (
    <Router>
      {/* <div> */}
        <Routes>
        
          <Route exact path='/' element={ <Inicio />} />

          <Route path='/mantenimiento' element={ <Categorias grupo="mantenimiento" /> } />
          <Route exact path="/salud" element={ <Categorias grupo="salud" />} />
          <Route exact path="/mascotas" element={ <Categorias grupo="mascotas"/>} /> 
          <Route exact path="/alimentos" element={ <Categorias grupo="alimentos"/>} />                                        
                    
          <Route exact path="/proveedores/:categoria" element={ <Proveedores />} />
          
          <Route exact path="/contacto" element={ <Contacto />} />

        </Routes>       
        
      {/* </div> */}
    </Router>
)}


