import './cartWidget.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <>
            <Link to="/cart"><button className="cart-btn"><FontAwesomeIcon icon={faCartShopping} style={{color:'white'}}/></button></Link>
        </>
    );
}

export default CartWidget;
