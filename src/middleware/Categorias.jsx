import React, { useState, useEffect } from 'react';
import { Navbar } from "../components/UI/Navbar";
import { Footer } from "../components/UI/Footer";
import { ShowCategorias } from '../pages/categorias';
import { getCategoriasByGrupo } from '../fetch/categorias';

export function Categorias({grupo}) {
                 
    const [resultadoApi, setResultadoApi] = useState([]);    
    const [page, setPage] = useState(grupo);    

    // const peticion = async () => {
    
    //     getCategoriasByGrupo(grupo)        
    //     .then((json) => {
    //         setResultadoApi(json);
    //     })
    //     .catch((err) => {
    //         console.log("Error encontrado:", err);
    //     });
        
    // }

    // useEffect(() => {
    //     peticion();
    // }, []);

    useEffect(() => {
        async function fetchData () {
            getCategoriasByGrupo(grupo)        
            .then((json) => {            
                setResultadoApi(json);              
            })
            .catch((err) => {
                console.log("Error encontrado:", err);
            });                  
        }
        fetchData()
    }, [grupo]);
 

     return (
         <>
            <Navbar page={page} />  
            <ShowCategorias jData={resultadoApi} />
            <Footer />          
         </>
     )
}

