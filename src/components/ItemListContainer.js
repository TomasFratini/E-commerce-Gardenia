import { useEffect, useState } from "react"
import  ItemList  from "./ItemList"
import { useParams } from "react-router-dom";
import Presentation from "./Presentation";
import { useAppContext } from "../Context/AppContext";


function ItemListContainer() {

  const { products } = useAppContext()

  const {categoriaId} = useParams()

  const [productos, setProductos] = useState([])
  const [mostrar, setMostrar] = useState(true)

  useEffect(() => {
    getProductos()
    
  },[categoriaId])
  
  const getProductos = () => {
      const categoryPromise = new Promise ((resolve, reject) => {
          setTimeout(() => {
              resolve (products)
          }, 2000);
          
      })
      
      categoryPromise.then (items => {
          if (categoriaId) {
            setMostrar(false)
              setProductos (products.filter (c => c.category == categoriaId))
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
        <ItemList products={products}/> 
          
      )}
    </div>
        
  )
}
export default ItemListContainer