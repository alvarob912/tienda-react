import { useState,useEffect } from "react"
import { consultarBDD } from "../../assets/funciones";
const Home = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarBDD().then(prod => setProductos(prod))
    }, []);

    return (
        <div className="row container-fluid justify-content-center">
            {productos}
        </div>
    );
}

export default Home;
