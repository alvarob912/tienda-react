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
            <Link to="/cart"><button className="cart-btn"><FontAwesomeIcon icon={faCartShopping} style={{color:'white'}}/></button></Link>
            <p>{getItemQuantity()}</p>
        </>
    );
}

export default CartWidget;
