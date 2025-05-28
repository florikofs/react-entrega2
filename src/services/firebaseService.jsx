import { collection, doc, getDocs, getDoc, addDoc, query, where } from "firebase/firestore"
import { db } from "../config/firebaseConfig"

//Traer listado de productos + filtro category
export const getProducts = async (category) => {
    const prodCollection = collection(db, "Products")

    const q = category
        ? query(prodCollection, where("category", "==", category))
        : prodCollection;

    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
};

//Traer producto
export const getProductsById = async (id) => {
    const prodDoc = doc(db, "Products", id)

    const item = await getDoc(prodDoc)

    return {
        id: item.id,
        ...item.data()
    }
};

//Crear orden
export const createOrder = async (newOrder) => {
    const orderCollection = collection(db, "Orders")
    const orderCreatedRes = await addDoc(orderCollection, newOrder)
    return orderCreatedRes
};

