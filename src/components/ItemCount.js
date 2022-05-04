import { useState } from "react"

function ItemCount({stock, initial, onAdd}) {
  
  const [suma, setSuma] = useState(initial)

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
  
return (
    <>
    <div className="flex flex-col space-x-2">
      <div className="flex space-x-1 pl-16 pb-2">
        <button className="btn btn-xs btn-circle bg-primary-content" onClick={resHandler}> - </button>
        <strong className=""> {suma} </strong>
        <button className="btn btn-xs btn-circle bg-primary-content" onClick={addHandler}> + </button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(suma)} >Agregar al carrito</button>
      <strong>Stock: {stock}</strong>
    </div>
    </>
  )
}
export default ItemCount