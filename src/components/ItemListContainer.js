import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { productList } from "../Data/productList";
import { useParams } from "react-router-dom";
import Presentation from "./Presentation";


function ItemListContainer() {

  const {categoriaId} = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {
      getProductos()
    }, [categoriaId])
    
    const getProductos = () => {
        const productPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (productList)
            }, 1000);
        })
        
        productPromise.then (items => {
            if (categoriaId) {
                setProductos (productList.filter (c => c.categoria == categoriaId))
            } else {
                setProductos(items)
            }
        })
    }
    
  return (
        
    <div>
        <Presentation/>
        <ItemList products={productos}/> 
    </div>
        
  )
}
export default ItemListContainer