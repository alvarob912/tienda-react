import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc} from "firebase/firestore"
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
export {cargarBDD, getProductos}