import React from 'react';
//import Logo from '../../img/logo.png';


export function Navbar({page}) {
        
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " aria-label="navbar El Aromo">
            <div className="container">
                <img className="nav-logo" src="/img/logo.png" alt="Barrio El Aromo" /> <span>El Aromo</span>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsAromo" aria-controls="navbarsAromo" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarsAromo">                
                    <ul className="navbar-nav" key='lista'>
                        <li className="nav-item" key='inicio'>
                            <a className = {(page === 'inicio') ? "nav-link active": "nav-link"} href="/">Inicio</a>                            
                        </li>
                        <li className="nav-item" key='mantenimiento'>
                            {/* <a className="nav-link <% if (page === 'mantenimiento') { %>active<% } %>" href="/mantenimiento">Mantenimiento</a> */}
                            <a className = {(page === 'mantenimiento') ? "nav-link active": "nav-link"} href="/mantenimiento">Mantenimiento</a>                            
                        </li>
                        <li className="nav-item" key='salud'>
                            {/* <a className="nav-link <% if (page === 'salud') { %>active<% } %>" href="/salud">Salud</a> */}
                            <a className={(page === 'salud') ? "nav-link active": "nav-link"} href="/salud">Salud</a>
                        </li>
                        <li className="nav-item" key='mascotas'>
                            {/* <a className="nav-link <% if (page === 'mascotas') { %>active<% } %>" href="/mascotas">Mascotas</a> */}
                            <a className={(page === 'mascotas') ? "nav-link active": "nav-link"} href="/mascotas">Mascotas</a>
                        </li>
                        <li className="nav-item" key='alimentos'>
                            {/* <a className="nav-link <% if (page === 'alimentos') { %>active<% } %>" href="/alimentos">Alimentos</a> */}
                            <a className={(page === 'alimentos') ? "nav-link active": "nav-link"} href="/alimentos">Alimentos</a>
                        </li>
                        <li className="nav-item" key='contacto'>
                            {/* <a className="nav-link <% if (page === 'contacto') { %>active<% } %>" href="/contacto">Contacto</a> */}
                            <a className={(page === 'contacto') ? "nav-link active": "nav-link"} href="/contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
