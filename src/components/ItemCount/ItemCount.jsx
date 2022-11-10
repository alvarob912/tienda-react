import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial

    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const incrementar = () => contador < stock && setContador(contador + 1)

    const decrementar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <>
            <button onClick={decrementar} className='btn btn-secondary'><FontAwesomeIcon icon={faMinus}/></button>
                    {contador}
            <button onClick={incrementar} className='btn btn-secondary'><FontAwesomeIcon icon={faPlus}/></button>
            <button className="btn btn-secondary" onClick={agregarAlCarrito}><FontAwesomeIcon icon={faCartShopping} style={{color:'black'}}/></button>
        </>
    );
}

export default ItemCount;
