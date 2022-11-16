import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
const Item = ({prod}) => {
    return (
        <div className="card mb-3 cardProducto border-primary" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={prod.img} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-center">
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">stock: {prod.stock}</p>
                        <button className="btn btn-outline-primary"><Link className="nav-link" to={`/product/${prod.id}`}>Ver Produto</Link></button>
                        <button className="btn btn-outline-primary"><FontAwesomeIcon icon={faCartShopping}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;

