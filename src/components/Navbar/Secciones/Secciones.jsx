import { Link } from "react-router-dom";
const Secciones = () => {
    return (
        <>
            <li className="nav-item">
            <Link className="nav-link" to="/category/cafe">Cafe</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/category/molino">Molino</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/category/cafetera">Cafetera</Link>
            </li>
        </>
    );

}

export default Secciones;
