import './cartWidget.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
            { getItemQuantity() >= 1 && <span className="p-2 badge rounded-pill bg-danger">{getItemQuantity()}</span>}
            <Link to="/cart"><button className="cart-btn"><FontAwesomeIcon icon={faCartShopping} style={{color:'white'}}/></button></Link>
        </>
    );
}

export default CartWidget;
