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

        <button class="btn btn-xs" onClick={resHandler}> - </button>
        <strong class="bg-green-300"> {suma} </strong>
        <button class="btn btn-xs" onClick={addHandler}> + </button>
    </div>
    </>
  )
}
export default ItemCount