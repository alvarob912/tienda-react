import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const{cart, emptyCart, removeItem, totalPrice} = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ?
            <div>
                <p>Tu carrito esta vacio</p>
                <Link to={'/'}><button className="btn btn-primary">Ir al incio</button></Link>
            </div>
            :
            <div>
                {cart.map((prod, indice) => 
                    <div className="card" style={{width: '18rem'}}>
                        <img src={`../img/${prod.img}`} className="img-fluid rounded-start" />
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Cantidad: {prod.cant}</p>
                            <p className="card-text">Precio Unitario: ${prod.precio}</p>
                            <p className="card-text">Subtotal: ${prod.precio * prod.cant}</p>
                            <button className="btn btn-dark" onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
                        </div>
                    </div>
                )}
                <div>
                    <p>Total: ${totalPrice()}</p>
                    <button className="btn btn-dark" onClick={emptyCart}>Limpiar carrito</button>
                    <Link to="/checkout"><button className="btn btn-dark">Finalizar compra</button></Link>
                </div>
            </div>
        }
        </>
    );
}

export default Cart;
