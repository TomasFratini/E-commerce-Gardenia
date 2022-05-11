import ItemDetail from "./ItemDetail"
import { productList } from "../Data/productList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

    const [detalle, setDetalle] = useState({})
    

    const { itemId } = useParams()

    useEffect(() => {
      getProductos()
    }, [itemId])
    
    const getProductos = () => {
        const detallePromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (productList.find(p => p.id == itemId)
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