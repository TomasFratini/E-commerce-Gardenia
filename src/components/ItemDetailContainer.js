import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

function ItemDetailContainer() {

    const [detalle, setDetalle] = useState({})
    
    const { items } = useAppContext()

    const { itemId } = useParams()

    useEffect(() => {
      getProductos()
    }, [itemId])
    
    const getProductos = () => {
        const detallePromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (items.find(p => p.id == itemId)
            )}, 1000);
        })
        
        detallePromise.then (item => {
            setDetalle(item)
            console.log(item);
        })
    }
    
  return (
    <div className="flex justify-center">
        <ItemDetail detalles={detalle}/>
    </div>
  )
}
export default ItemDetailContainer