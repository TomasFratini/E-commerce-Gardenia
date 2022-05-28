import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

function ItemDetailContainer() {

    const [detalle, setDetalle] = useState({})
    
    const { items } = useAppContext()

    const { itemId } = useParams()

    useEffect(() => {
     setDetalle(items.find(p => p.id == itemId))
    }, [itemId])
    
  return (
    <div className="flex justify-center">
        <ItemDetail detalle={detalle}/>
    </div>
  )
}
export default ItemDetailContainer