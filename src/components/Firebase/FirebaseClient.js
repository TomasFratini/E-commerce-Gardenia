import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { initializeAppp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyChJTpImTVa5iVEDPdly52PsvfIB2QeNY0",
  authDomain: "tomasfratini-ecommerce.firebaseapp.com",
  projectId: "tomasfratini-ecommerce",
  storageBucket: "tomasfratini-ecommerce.appspot.com",
  messagingSenderId: "996580656596",
  appId: "1:996580656596:web:d49f39cfdc47d3a9b34241",
  measurementId: "G-HQSQWKN762"
}; 

const App = initializeApp(firebaseConfig);





const db = getFirestore()
const comprasColeccion = collection(db, "orders")

export const grabarCompra = async (array) => {
    const respuesta = await addDoc(comprasColeccion, array)
    return respuesta
}