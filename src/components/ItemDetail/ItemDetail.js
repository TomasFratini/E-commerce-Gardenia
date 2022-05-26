import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppContext } from "../../Context/AppContext"
import ItemCount from "./ItemCount"

function ItemDetail({detalles}) {

    const [finalize, setFinalize] = useState(false)

    const onAdd = (cantidad) => {
      setFinalize(true)
  }

  return (
    
    <div className="card bg-base-100 shadow-xl max-w-3xl max-h-full ">
      <figure><img className="" src={detalles.img} alt="img"/></figure>
      <div className="card-body">
        <h2 className="card-title">{detalles.name}</h2>
         <strong className="max-h-60 text-xl">${detalles.precio}</strong>
        <p className="max-h-60">{detalles.description}</p>
        <div className="card-actions justify-end">
        </div>
          {finalize ? (
            <div className="flex"> 
              <Link to="/cart" className="btn btn-outline m-1"> Ver Carrito </Link>
              <Link to="/">
                <button className="btn btn-outline m-1">
                    Seguir comprando
                </button>
              </Link>
            </div>
          ) : (
          <ItemCount className="flex justify-center" stock={detalles.stock} initial={2} onAdd={onAdd} id={detalles.id}/>

          )}
      </div>
    </div>
  )
}
export default ItemDetail



