import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Navbar } from "../components/UI/Navbar";
import { Footer } from "../components/UI/Footer";
import { ShowProveedores } from '../pages/proveedores';
import { getProvByCategory } from '../fetch/proveedores';

export function Proveedores() {
    // const {categoria} = useParams();
        
    // const [resultadoApi, setResultadoApi] = useState([]);            

    // const fetchData = async () => {
    //     // const URL = `http://localhost:8080/proveedores/${categoria}`;        
    //     // const response = await fetch(URL);
    //     // const data = await response.json();
    //     // setResultadoApi(data);
        
    //     getProvByCategory(categoria)        
    //     .then((json) => {            
    //         setResultadoApi(json);                  
    //     })
    //     .catch((err) => {
    //         console.log("Error encontrado:", err);
    //     });        
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);
    
    


    const {categoria} = useParams();
    
    const [resultadoApi, setResultadoApi] = useState([]);            

    // const peticion = async () => {

    //     const URL = `http://localhost:8080/proveedores/${categoria}`;        
        
    //     const respuesta = await fetch(URL);
    //     const data = await respuesta.json();
    //     setResultadoApi(data);
    // }

    // useEffect(() => {
    //     async function fetchData () {
    //       const respuesta = await fetch(URL);
    //       const data = await respuesta.json();
    //       setResultadoApi(data);
    //     }
    //     fetchData()
    // }, [URL]);

    useEffect(() => {
        async function fetchData () {
            getProvByCategory(categoria)        
            .then((json) => {            
                setResultadoApi(json);              
            })
            .catch((err) => {
                console.log("Error encontrado:", err);
            });                  
        }
        fetchData()
    }, [categoria]);

    // useEffect(() => {
    //     peticion()
    //     // getProvByCategory(categoria)        
    //     // .then((json) => {            
    //     //     setResultadoApi(json);      
    //     //     console.log(json)            
    //     // })
    //     // .catch((err) => {
    //     //     console.log("Error encontrado:", err);
    //     // });        

    // });
    
    // const peticion = async () => {

    //     getProvByCategory(categoria)        
    //     .then((json) => {            
    //         setResultadoApi(json);                          
    //     })
    //     .catch((err) => {
    //         console.log("Error encontrado:", err);
    //     });        
    // // }


    return (
         <>
            <Navbar page="" />              
            <ShowProveedores jData={ resultadoApi } />     
            <Footer />              
         </>
     )
}

