import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducto } from '../../assets/firebase';
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getProducto(id).then(prod =>{ 
            setProducto(prod)
        })
    }, []);

    return (
        <>
        { producto !== "Producto no encontrado" ?
        <div>
            <div className='card mb-3 container itemDetail border-primary'>
                <ItemDetail producto={producto}/>
            </div>
        </div>
        :
        <>
            <h1>Producto no encontrado</h1>
        </>
    }
    </>
    );
}

export default ItemDetailContainer;
