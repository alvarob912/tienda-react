import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"
//"AIzaSyAV4ujUPS08F4nffztbbkZylpxONgceTDM"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-2022-f800a.firebaseapp.com",
  projectId: "react-2022-f800a",
  storageBucket: "react-2022-f800a.appspot.com",
  messagingSenderId: "582000741892",
  appId: "1:582000741892:web:0cee10c4aa236abbccef51"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            categoria: prod.categoria,
            precio: prod.precio,
            stock: prod.precio,
            img: prod.img
        })
    });
}

const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items

}

const getProducto = async (id) =>{
    const prod = await getDoc(doc(db,"productos",id))
    let item
    if (prod.data()){
        item={...prod.data(), id: prod.id}
    } else {
        item = "Producto no encontrado"
    }
    return item
}

const createProducto = async (objProducto) => {
    const estado = await addDoc(collection(db, "productos"), {
        nombre: objProducto.nombre,
        categoria: objProducto.categoria,
        precio: objProducto.precio,
        stock: objProducto.precio,
        img: objProducto.img
    })
    return estado
}

const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db, "productos", id), info)
    return estado
}

const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}

const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        fecha: fecha,
        precioTotal: preTotal
    })
    return ordenCompra
}

const getOrdenCompra = async (id) =>{
    const item = await getDoc(doc(db, "ordenCompra", id))
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}


export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra, app}