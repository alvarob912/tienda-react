import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './cartWidget.css'
const CartWidget = () => {
    return (
        <>
            <button className="cart-btn"><FontAwesomeIcon icon={faCartShopping} style={{color:'white'}}/></button>
        </>
    );
}

export default CartWidget;
