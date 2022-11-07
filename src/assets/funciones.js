export const consultarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
        const cardProductos = productos.map(prod => 
            <div className="card cardProducto" key={prod.id}>
                <img src={`./img/${prod.img}`} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-dark ">Ver detalle</button>
                </div>
            </div>
        )
        return cardProductos
    }
