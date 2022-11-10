import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto}) => {

    const onAdd = (contador) => {
        console.log(contador)
    }


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
                        <ItemCount stock={producto.stock} onAdd={onAdd}/> <br />
                        <button className='btn btn-outline-primary btn-button'>Finalizar compra</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
