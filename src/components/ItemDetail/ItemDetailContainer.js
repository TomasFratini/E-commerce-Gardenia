import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {

  const [detalle, setDetalle] = useState({})

  const { itemId } = useParams()

  useEffect(() => {
    const db = getFirestore() 

    const productos = collection(db, 'items')

    getDocs(productos).then( (snapshot) => { 
        const productList = []
        snapshot.docs.forEach(s => {
          productList.push( { id: s.id, ...s.data() } )
        });
        setDetalle(productList.find(p => p.id === itemId))
    })
  }, [itemId])
    





  return (
    <div className="flex justify-center">
        <ItemDetail detalle={detalle}/>
    </div>
  )
}
export default ItemDetailContainer