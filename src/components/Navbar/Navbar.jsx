import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import FormBusqueda from '../formBusqueda/formBusqueda';
import Secciones from './Secciones/Secciones';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = React.memo(() => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src="../img/logo.png" alt='...'/></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Secciones/>
                    <FormBusqueda busqueda={"Buscar productos"}/>
                </ul>
                <CartWidget/>
            </div> 
        </div>
        </nav>
    );
})

export default Navbar;
