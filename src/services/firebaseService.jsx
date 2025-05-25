import { collection, doc, getDocs, getDoc, addDoc } from "firebase/firestore"
import { db } from "../config/firebaseConfig"

//Traer listado de productos
export const getProducts = async () => {
    const prodCollection = collection(db, "Products")
    const products = await getDocs(prodCollection)

    return products.docs.map(item => ({
        id: item.id,
        ...item.data(),
    }))
}

//Traer producto
export const getProductsById = async (id) => {
    const prodDoc = doc(db, "Products", id)

    const item = await getDoc(prodDoc)

    return {
        id: item.id,
        ...item.data()
    }
}

//Crear orden
export const createOrder = async (newOrder) => {
    const orderCollection = collection(db, "Order")
    const orderCreatedRes = await addDoc(orderCollection, newOrder)
    console.log("Resp servicio Firebase", orderCreatedRes)
    return orderCreatedRes
}

//Filtrar por categoría

