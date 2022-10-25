import './navbar.css'
import FormBusqueda from '../formBusqueda/formBusqueda';
import Dropdown from './Dropdown/Dropdown';
import Secciones from './Secciones/Secciones';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="./img/logo.png"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Secciones/>
                    <Dropdown/>
                </ul>
                <FormBusqueda busqueda={"Buscar productos"}/>
                <CartWidget/>
            </div>
            
        </div>
        </nav>
    );
}

export default Navbar;