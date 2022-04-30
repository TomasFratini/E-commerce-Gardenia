import { useEffect, useState } from "react";
import { productList } from "../Data/productList";
import Item from "./Item";

function ItemList() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
      getProductos()
    }, [])
    
    const getProductos = () => {
        const productPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (productList)
            }, 1000);
        })
        
        productPromise.then (item => {
            setProductos(item)
        })
    }


  return (
    <div className='grid grid-cols-3 gap-4 place-items-stretch h-56 mt-8'>
        {productos.map(p => <Item key={p.id} productos={p}/>)}
    </div>
  )
}
export default ItemList