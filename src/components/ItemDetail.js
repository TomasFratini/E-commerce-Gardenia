import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

function ItemDetail( props ) {

    const {id, name, description, precio, img} = props.detalle

    const [finalize, setFinalize] = useState(false)

    const onAdd = (cantidad) => {
      setFinalize(true)
      console.log("se agrego un producto", cantidad)
  }

  return (
    
    <div className="card card-side bg-base-100 shadow-xl max-w-3xl max-h-full ">
      <figure><img className="" src={img} alt="img"/></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
         <strong className="max-h-60 text-xl">${precio}</strong>
        <p className="max-h-60">{description}</p>
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
          <ItemCount className="" stock={5} initial={1} onAdd={onAdd} id={id}/>

          )}
      </div>
    </div>
  )
}
export default ItemDetail



