

const ItemDetail = ({producto}) => {


    return (
        <>
            <div className='row g-8'>
                <div className='col-md-4'>
                    <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt='...'/>
                </div>
                <div className='col-md-8'>
                    <div className="card-body text-center">
                        <h5 className='card-title'>{producto.nombre}</h5>
                        <p className='card-text'>Precio: ${producto.precio}</p>
                        <p className='card-text'>Stock: {producto.stock}</p>
                        <button className='btn btn-outline-primary btn-button'>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
