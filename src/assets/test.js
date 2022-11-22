import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";
/*

//createProducto(producto).then(mensaje => console.log(mensaje))
getProducto("CqeQ3jJlC3jjhxaM3p5T").then(prod => {
    prod.stock -= 10
    updateProducto("CqeQ3jJlC3jjhxaM3p5T", prod).then(mensaje => console.log(mensaje))
})

deleteProducto("CqeQ3jJlC3jjhxaM3p5T").then(mensaje => console.log(mensaje))

//kdZgIbitlQhxH8bIQDp7
const cliente = {
    nombre: "Alvaro",
    apellido: "Bijarra",
    email: "alvarotoreto@gmail.com",
    dni: 41258369,
    direccion: "roca 27"
}

createOrdenCompra(cliente, 12500, Date.now()).then(orden => console.log(orden))

getOrdenCompra("kdZgIbitlQhxH8bIQDp7").then(orden => console.log(orden))*/