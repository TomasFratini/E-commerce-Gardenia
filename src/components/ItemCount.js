import { useState } from "react"
import { useAppContext } from "../Context/AppContext"
import { useCartContext } from "../Context/CartContext"

function ItemCount({stock, initial, onAdd, id}) {
  
  const [suma, setSuma] = useState(initial)

 const { addToCart } = useCartContext()
 const { products } = useAppContext()

  const resHandler = () => {
      
    setSuma(suma-1)
    if (suma < initial) {
        setSuma(0)
    }
      
  }

  const addHandler = () => {
    setSuma(suma + 1)
    if (suma >= stock) {
      setSuma(stock)
    }
    
  }

  const handlClick = (id, cantidad) => {
    const findProduct = products.find ((producto) => producto.id === id)

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
      <div className="flex space-x-1 pl-16 pb-2">
        <button className="btn btn-xs btn-circle bg-primary-content" onClick={resHandler}> - </button>
        <strong className=""> {suma} </strong>
        <button className="btn btn-xs btn-circle bg-primary-content" onClick={addHandler}> + </button>
      </div>
      <button className="btn btn-primary" onClick={() => handlClick(id, suma)} >Agregar al carrito</button>
      <strong>Stock: {stock}</strong>
    </div>
    </>
  )
}
export default ItemCount