import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContext"
import CartItem from "./CartItem"



function Cart() {
    
    const { cart, delateCart, PrecioTotal, contar } = useCartContext()


    if (cart.length === 0) {
      return (
            <div className="flex-auto justify-center mx-auto">
            <h2 className="flex justify-center flex-auto mt-4 text-2xl font-bold text-gray-600">
                No hay productos en su carrito
            </h2>
            <Link to="/">
                <div className="flex justify-center mt-10">
                    <button className=" btn btn-outline ">
                        Ir al catálogo
                    </button>
                </div>
            </Link>
        </div>
      )
    } else {
      return (
        <>

<div>
                {/* Detalle de cada producto agregado */}
                <div>
                    {cart.map((c) => {
                        return <CartItem key={c.id} products={c}></CartItem>;
                    })}
                </div>

                {/* Totalizados */}
                <div className="flex flex-col flex-auto ">
                    <h3 className="flex justify-center text-blue-700 text-s font-medium">
                        Productos en el carrito: {contar()}
                    </h3>
                    <h3 className="flex justify-center text-blue-700 text-s font-medium">
                        Precio total del carrito: AR$ {PrecioTotal()}
                    </h3>
                </div>

                {/* Botones */}
                <div className=" flex flex-wrap justify-center mt-6 mb-20">
                    <Link to="../pago">
                        <button className="btn btn-outline m-1">
                            Ir a pagar
                        </button>
                    </Link>
                    <button onClick={() => {delateCart()}} className="btn btn-outline  m-1">
                        Vaciar carrito
                    </button>
                    <Link to="/">
                        <button className="btn btn-outline  m-1">
                            Seguir comprando
                        </button>
                    </Link>
                </div>
            </div>

          {/* <div>{cart.map(c => <CartItem key={c.id} products={c}/>)}</div>
          <strong> Total: $ {PrecioTotal()} </strong>
          <p>Cantidad de Productos: {contar()}</p>
          <button className="btn" onClick={() => {delateCart()}}> Vaciar carrito</button>
          <Link to="/">
              <button className="btn"> Seguir comprando</button>
            </Link>  */}

            

        </>
      )
    }

 
}
export default Cart