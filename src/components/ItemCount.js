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
    <div className="items-stretch">

        <button className="btn btn-xs" onClick={resHandler}> - </button>
        <strong className=""> {suma} </strong>
        <button className="btn btn-xs" onClick={addHandler}> + </button>
        <button className="btn btn-primary" onClick={() => onAdd(suma)} >Agregar al carrito</button>
    </div>
    </>
  )
}
export default ItemCount