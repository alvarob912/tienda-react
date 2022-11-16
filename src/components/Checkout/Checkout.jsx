import React from 'react';

const Checkout = () => {

    const datosFormularios = React.useRef()
    const consultarFromulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormularios.current)
        const valores = Object.fromEntries(datForm)
        console.log(valores)
        e.target.reset()
    }

    return (
        <div className='container'>
            <form onSubmit={consultarFromulario} ref={datosFormularios}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="number" className="form-control" name="telefono" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar compra</button>
            </form>
        </div>
    );
}

export default Checkout;
