import React from "react";
import { Navbar } from "../UI/Navbar";
import { Hero } from "../UI/Hero";
import { Footer } from "../UI/Footer";
import { Main } from "../Sections/Main";
import { Clasify } from "../Sections/Clasify";
import { Message } from "../Sections/Message";
import '../../css/style.css';

export function Inicio() {
  return (
    <>
      <header>
        <Navbar page='inicio' />
        <Hero />
      </header> 
      
      <Main />
      <Clasify />
      <Message />
      <Footer />  
    </>
  );
}


