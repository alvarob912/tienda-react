import { Link } from "react-router-dom";
const Item = ({prod}) => {
    return (
        <div className="card cardProducto">
                    <img src={`../img/${prod.img}`} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-dark "><Link className="nav-link" to={`/product/${prod.id}`}>Ver Produto</Link></button>
                    </div>
                </div>
    );
}

export default Item;
