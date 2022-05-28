import { useState } from "react"
import { useAppContext } from "../../Context/AppContext"
import { useCartContext } from "../../Context/CartContext"

function ItemCount({stock, initial, onAdd}) {
  
  const [suma, setSuma] = useState(1)

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

  /* const handlClick = (id, cantidad, img, name) => {
    const findProduct = items.find ((producto) => producto.id === id)

    if (!findProduct) {
        alert("Error")
        return
    } */

    // addToCart(findProduct, cantidad)
    // onAdd(suma)
  
  
  return (
    <>
    <strong>Stock: {stock}</strong>
    <div className="grid justify-center flex-col ">
      <div className="flex justify-self-center space-x-1  pb-2 ">
        <button className="btn btn-xs btn-circle bg-primary-content" onClick={resHandler}> - </button>
        <strong className=""> {suma} </strong>
        <button className="btn btn-xs btn-circle bg-primary-content" onClick={addHandler}> + </button>
      </div>
      <button className="btn btn-outline" onClick={() => onAdd(suma)} >Agregar al carrito</button>
    </div>
    </>
  )
}
export default ItemCount