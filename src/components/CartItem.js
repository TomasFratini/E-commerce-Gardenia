import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"

function CartItem({ products }) {

    const {name, img, id, description, quantity, precio } = products
    const { delateFromCart } = useCartContext()

    const totalPorItem = () => {
      const result = quantity * precio
      return result
    }

  return (

    <section className="text-gray-600 body-font">
      <div className="container px-12 mt-2 py-1 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b border-r pb-4 mb-1 border-gray-200 lg:flex-row md:flex-row sm:flex-row justify-between">
              <Link to={`/productos/${products.id}`}>
                  <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-50 flex-shrink-0">
                      <img src={img} alt={name} className="sm:w-16 sm:h-16 mw-10 mh-10 hover:scale-125 ease-in duration-300"></img>
                  </div>
              </Link>
              <div className="container flex-col sm:text-left  mt-6 sm:mt-0" >
                  <h2 className=  "flex text-gray-900 text-lg title-font font-medium mb-2">{name}</h2>
                  <span className="flex text-gray-500 text-s font-medium ">Cantidad: {quantity} unidades</span>
                  <span className="flex text-gray-500 text-s font-medium ">Precio: AR$ {totalPorItem()}</span>
              </div>
              <div className="flex items-center  flex-end">
                  <button onClick={()=> {delateFromCart(id)}} className="btn btn-outline m-1" >Eliminar</button>
              </div> 
              
          </div>
      </div>
    </section>
  )
}
export default CartItem