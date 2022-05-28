import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import ItemCount from "./ItemCount"

function ItemDetail({detalle}) {

  const { addToCart } = useCartContext()

    const [finalize, setFinalize] = useState(false)

    const onAdd = (cantidad) => {
      setFinalize(true)
      addToCart(detalle, cantidad)
  }

  return (
    
    <div className="card bg-base-100 shadow-xl max-w-3xl max-h-full ">
      <figure><img className="" src={detalle.img} alt="img"/></figure>
      <div className="card-body">
        <h2 className="card-title">{detalle.name}</h2>
         <strong className="max-h-60 text-xl">${detalle.precio}</strong>
        <p className="max-h-60">{detalle.description}</p>
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
          <ItemCount className="flex justify-center" stock={detalle.stock} initial={2} onAdd={onAdd} />

          )}
      </div>
    </div>
  )
}
export default ItemDetail



