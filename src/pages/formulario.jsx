import React, { useState } from "react";
import { validarEmail } from "../helpers/validar-datos";
import Swal from 'sweetalert2';

const initForm = {
    name: '',
    email: '',
    mensaje: '',
}

export function ShowFormulario() {
    
    const [formValues, setFormValues] = useState( initForm );

    const { name, email, mensaje } = formValues;
    
    const handleChange = ({target}) => {
         setFormValues({
            ...formValues, 
            [target.name]: target.value           
         });
         console.log(target.name, target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();            

        console.log(formValues)
    
        // Nombres y Apellidos 
        if (!name) return Swal.fire('','Ingrese nombre y apellido','error');
        if (name.trim().length > 30) return Swal.fire('', 'El nombre y apellido no deben exceder de 30 caracteres','error');
        
        // Email
        if (!email) return Swal.fire('','Ingrese un email','error');
        if (!validarEmail(email)) return Swal.fire('', 'El email ingresado no es válido','error');
      
        // Mensaje
        if (!mensaje) return Swal.fire('','Cual es su consulta?','question');

        
        fetch('http://localhost:8080/contacto', {
            method:'POST',  // para crear            
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( formValues )
        
        }).then(response => {
        
            if (!response.ok) throw Error(response.statusText);
          
                return response;
            })
            .then((res) => { 
                console.log(res) 
                setFormValues( initForm );
            })
          .catch(err => { 
                console.log(err)                 
            });        
    }

return (
    
        <div className="container py-4 ">
            <div className="row">
                <div className="bg-light-green text-center mb-5">                        
                    <h1 className="section-title ps-3 pt-4"> CONTACTO</h1>                    
                </div>

                <div className="col-md-6 mx-auto login-form">
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nombre y Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={ name }                                
                                onChange={handleChange}                                  
                                autoComplete="off"
                            />                            
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={ email }
                                onChange={handleChange}                                                                                                                         
                                autoComplete="off"
                            />                            
                        </div>
                        <div className="form-group">
                            <label>Mensaje</label>
                            <textarea
                                type="text"
                                className="form-control"
                                rows="5"
                                name="mensaje"
                                value={ mensaje }
                                onChange={ handleChange }                                
                            ></textarea>                           
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Enviar" 
                            />
                        </div>
                    </form>
                </div>                
                
            </div>
        </div>
    )
}