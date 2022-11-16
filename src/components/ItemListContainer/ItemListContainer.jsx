import { useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../assets/firebase";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        if(category){
            getProductos().then(products => {
                const productsList = products.filter(prod => prod.categoria === category)
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else{
            getProductos().then(productsList => {
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
    }, [category]);

    return (
        <div className="row container-fluid justify-content-center">
            {productos}
        </div>
    );
}

export default ItemListContainer;
