import React from "react";
import { Navbar } from "../components/UI/Navbar";
import { Footer } from "../components/UI/Footer";
import { ShowFormulario } from "../pages/formulario";
import '../css/formulario.css';

export function Contacto() {
    return(
    <>
        <Navbar page="contacto"/>  
        <ShowFormulario />
        <Footer />          
    </>
    )
}