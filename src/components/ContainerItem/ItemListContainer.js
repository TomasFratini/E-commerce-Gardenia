import { useEffect, useState } from "react"
import  ItemList  from "./ItemList"
import { useParams } from "react-router-dom";
import Presentation from "../Presentation";
import { collection, getDocs, getFirestore } from "firebase/firestore";


function ItemListContainer() {

  const {categoriaId} = useParams()

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const db = getFirestore() 

    const productos = collection(db, 'items')

    getDocs(productos).then( (snapshot) => { 
        const productList = []
        snapshot.docs.forEach(s => {
          productList.push( { id: s.id, ...s.data() } )
        });
        const productsFilter = categoriaId ? (productList.filter (c => c.category === categoriaId)):(productList)

        setProductos(productsFilter)
      })
  }, [categoriaId])
        
  return (
    <div className="">
      <div className="col-span-6 sm:col-span-3">
        {productos.length === 0 ? (
         <Presentation/>
         
          ) : (
          <ItemList products={productos}/> 
            
        )}
      </div>

    </div>  
        
  )
}
export default ItemListContainer