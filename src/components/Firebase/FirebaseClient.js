import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { initializeAppp } from "firebase/app";


const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN,
  projectId:process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
  appId:process.env.REACT_APP_APPID,
  measurementId:process.env.REACT_APP_MEASUREMENTID 
}; 

const App = initializeApp(firebaseConfig);

const db = getFirestore()
const comprasColeccion = collection(db, "orders")

export const grabarCompra = async (array) => {
    const respuesta = await addDoc(comprasColeccion, array)
    const orden = respuesta.id
    return (respuesta, orden)
}