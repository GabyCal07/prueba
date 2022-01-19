import React, { useState, useEffect } from 'react';
import { getAllGrupos } from '../../fetch/grupos';
import { Card } from "../Cards/Card";

export function Main() {

    const [resultadoApi, setResultadoApi] = useState([]);    

    const fetchData = async () => {

        getAllGrupos()
        .then((json) => {            
            setResultadoApi(json);              
        })
        .catch((err) => {
            console.log("Error encontrado:", err);
        });                  
    }

    useEffect(() => {
        fetchData();
    }, []);

    // const peticion = async () => {

    //     const URL = "http://localhost:8080/grupos"
        
    //     const respuesta = await fetch(URL);
    //     const data = await respuesta.json();
    //     setResultadoApi(data);
    // }

    // useEffect(() => {
    //     peticion();
    // }, []);

    return(
        <main className="bg-light-gray py-4">
            <div className="main-container">
            
                <div className="container">
                    <div className="row">
                                           
                        <h2 className="section-title "> {/* text-center */}
                            <img className="section-icon pulse" src="img/search.png" alt="Icono Buscar" />
                            Fijate si encontrás lo que estás buscando ... 
                        </h2>            
                                            
                        {resultadoApi.map((value, index) => {                            
                            return (                                
                                <div className="col-xl-3 col-md-6 col-sm-12" key={value._id} >
                                    <Card value={value} />                                
                                </div> 
                            )
                        })}
                    </div>                            
                </div>
            </div>
        </main>
    )}
