import { useState } from "react"

function ItemCount() {
  
  const [suma, setSuma] = useState(0)

  const resHandler = () => {
      
    setSuma(suma-1)
    if (suma < 1) {
        setSuma(0)
    }
    
  }

  const addHandler = () => {
      
    setSuma(suma + 1)
  }

  
return (
    <>
    <div className="items-stretch">

        <button className="btn btn-xs" onClick={resHandler}> - </button>
        <strong className=""> {suma} </strong>
        <button className="btn btn-xs" onClick={addHandler}> + </button>
    </div>
    </>
  )
}
export default ItemCount