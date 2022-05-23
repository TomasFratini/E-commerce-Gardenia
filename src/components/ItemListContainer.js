import { useEffect, useState } from "react"
import  ItemList  from "./ItemList"
import { useParams } from "react-router-dom";
import Presentation from "./Presentation";
import { useAppContext } from "../Context/AppContext";


function ItemListContainer() {

  const { items } = useAppContext()

  const {categoriaId} = useParams()

  const [productos, setProductos] = useState([])
  const [mostrar, setMostrar] = useState(true)

  useEffect(() => {
    getProductos()
    
  },[categoriaId])
  
  const getProductos = () => {
      const categoryPromise = new Promise ((resolve, reject) => {
          setTimeout(() => {
              resolve (items)
          }, 2000);
          
      })
      
      categoryPromise.then (items => {
          if (categoriaId) {
            setMostrar(false)
              setProductos (items.filter (c => c.category == categoriaId))
          } else {
              setProductos(items)  
              setMostrar(false)
          }
        })
        
      }
        
  return (
        
    <div className="">
      {mostrar ? (
        <Presentation/>
        ) : (
        <ItemList products={productos}/> 
          
      )}
    </div>
        
  )
}
export default ItemListContainer