import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

function ItemDetailContainer() {

    const [detalle, setDetalle] = useState({})
    
    const { products } = useAppContext()

    const { itemId } = useParams()

    useEffect(() => {
      getProductos()
    }, [itemId])
    
    const getProductos = () => {
        const detallePromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (products.find(p => p.id == itemId)
            )}, 1000);
        })
        
        detallePromise.then (item => {
            setDetalle(item)
        })
    }
    
  return (
    <div className="flex justify-center">
        <ItemDetail detalle={detalle}/>
    </div>
  )
}
export default ItemDetailContainer