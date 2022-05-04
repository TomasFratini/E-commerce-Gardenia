import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { productList } from "../Data/productList";
import { useParams } from "react-router-dom";


function ItemListContainer() {

  const {categoriaId} = useParams()

    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategory()
    }, [categoriaId])

    const getCategory = () => {
        const categoriaPromise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve (productList.filter (c => c.categoria == categoriaId))
            }, 1000);
        })

        categoriaPromise.then (item => {
            setCategory(item)
        })

    }
    
  return (
        
      <div>
       <ItemList categ={category}/> 
      </div>
        
  )
}
export default ItemListContainer