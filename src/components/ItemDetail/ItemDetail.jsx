import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({producto}) => {

    const {cart, isInCar, addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        addItem(producto,contador)
    }


    return (
        <>
            <div className='row g-8'>
                <div className='col-md-4'>
                    <img src={producto.img} className="img-fluid rounded-start" alt='...'/>
                </div>
                <div className='col-md-8'>
                    <div className="card-body text-center">
                        <h5 className='card-title'>{producto.nombre}</h5>
                        <p className='card-text'>Precio: ${producto.precio}</p>
                        <p className='card-text'>Stock: {producto.stock}</p>
                        <ItemCount stock={producto.stock} onAdd={onAdd}/> <br />
                        <button className='btn btn-outline-primary btn-button'><Link to="/cart" className="nav-link">Finalizar Compra</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;

