import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { productList } from "../Data/productList";
import { useParams } from "react-router-dom";
import Presentation from "./Presentation";


function ItemListContainer() {

  const {categoriaId} = useParams()

    const [productos, setProductos] = useState([])
    const [mostrar, setMostrar] = useState(true)

    useEffect(() => {
      getProductos()
      
    }, [categoriaId])
    
    const getProductos = () => {
        const categoryPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (productList)
            }, 2000);
            
        })
        
        categoryPromise.then (items => {
            if (categoriaId) {
                setProductos (productList.filter (c => c.categoria == categoriaId))
            } else {
                setProductos(items)  
                setMostrar(false)
            }
          })
          
        }
        
  return (
        
    <div>
      {mostrar ? (
        <Presentation/>
        ) : (
        <ItemList products={productos}/> 
          
      )}
    </div>
        
  )
}
export default ItemListContainer