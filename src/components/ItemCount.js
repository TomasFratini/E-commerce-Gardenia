import { useState } from "react"
import { useAppContext } from "../Context/AppContext"
import { useCartContext } from "../Context/CartContext"

function ItemCount({stock, initial, onAdd, id, img, name}) {
  
  const [suma, setSuma] = useState(1)

 const { addToCart } = useCartContext()
 const { items } = useAppContext()

  const resHandler = () => {
    
    setSuma(suma - 1)
    if (suma < initial) {
        setSuma(1)
    }
      
  }

  const addHandler = () => {
    setSuma(suma + 1)
    if (suma >= stock) {
      setSuma(stock)
    }
    
  }

  const handlClick = (id, cantidad, img, name) => {
    const findProduct = items.find ((producto) => producto.id === id)

    if (!findProduct) {
        alert("Error")
        return
    }

    addToCart(findProduct, cantidad)
    onAdd(suma)
  }
  
  return (
    <>
    <div className="flex flex-col space-x-2">
      <div className="flex space-x-1 pl-16 pb-2 ml-11">
        <button className="btn btn-xs btn-circle bg-primary-content" onClick={resHandler}> - </button>
        <strong className=""> {suma} </strong>
        <button className="btn btn-xs btn-circle bg-primary-content" onClick={addHandler}> + </button>
      </div>
      <button className="btn btn-outline" onClick={() => handlClick(id, suma, img, name)} >Agregar al carrito</button>
      <strong>Stock: {stock}</strong>
    </div>
    </>
  )
}
export default ItemCount