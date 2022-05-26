import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import { grabarCompra } from "../Firebase/FirebaseClient"

function Pago() {

  const { contar, PrecioTotal, cart, delateCart } = useCartContext()

  const armadoCompra = (datos) => {
    const productsCompra = cart.map( (p) =>{
      return {
          id: p.id,
          name: p.name,
          price: p.precio,
          quantity: contar()
      }
    })

    const compra = {
      cliente: [datos],
      productos: [...productsCompra],
      total: PrecioTotal()
    }

    console.log(compra);

    grabarCompra(compra)
    delateCart()
    console.log("compra realizada");

  }
    
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    mail: "",
    provincia: "",
    direccion: "",
    localidad: "",
    tarjeta: "",
    propietario: "",
    cvv: "",
    fecha: ""
  })

  const handleInput = (evt) => {
    const target = evt.target;
    const value = target.value;
    const nameInput = target.name;

    setCliente({...cliente, [nameInput]: value})
  }

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
            </div>
          </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Productos en carrito</h3>
              <h4 className="mt-1 text-sm text-gray-600">Cantidad de productos añadidos: {contar()}</h4>
              <h5 className="mt-1 text-sm text-gray-600">Precio total a abonar: ${PrecioTotal()}</h5>
            </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      onChange={(evt) =>
                      handleInput(evt)
                      }
                      value={cliente.nombre}
                      name="nombre"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ingrese nombre"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <input
                      type="text"
                      onChange={(evt) =>
                        handleInput(evt)
                        }
                        value={cliente.apellido}
                      name="apellido"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ingrese apellido"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Correo electronico
                    </label>
                    <input
                      type="text"
                      onChange={(evt) =>
                        handleInput(evt)
                        }
                        value={cliente.mail}
                      name="mail"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ingrese correo"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Provincia
                    </label>
                    <input
                      type="text"
                      onChange={(evt) =>
                        handleInput(evt)
                        }
                        value={cliente.provincia}
                      name="provincia"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ingrese provincia"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                      Direccion
                    </label>
                    <input
                      type="text"
                      onChange={(evt) =>
                        handleInput(evt)
                        }
                        value={cliente.direccion}
                      name="direccion"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ingrese direccion"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      Localidad
                    </label>
                    <input
                      type="text"
                      onChange={(evt) =>
                        handleInput(evt)
                        }
                        value={cliente.localidad}
                      name="localidad"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ingrese localidad"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                      Numero de tarjeta
                    </label>
                    <input
                      type="number"
                      onChange={(evt) =>
                        handleInput(evt)
                        }
                        value={cliente.tarjeta}
                      name="tarjeta"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ingrese numero de tarjeta"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                      Nombre titular
                    </label>
                    <input
                      type="text"
                      onChange={(evt) =>
                        handleInput(evt)
                        }
                        value={cliente.propietario}
                      name="propietario"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ingrese nombre del titular"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                      Codigo de seguridad
                    </label>
                    <input
                      type="number"
                      onChange={(evt) =>
                        handleInput(evt)
                        }
                        value={cliente.cvv}
                      name="cvv"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ingrese codigo de seguridad"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                      Fecha de vencimiento
                    </label>
                    <input
                      type="date"
                      onChange={(evt) =>
                        handleInput(evt)
                        }
                        value={cliente.fecha}
                      min="01-01-2022"
                      max="01-01-2030"
                      name="fecha"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Ingrese fecha de vencimiento"
                    />
                  </div>
                </div>
              </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Link to="../finalizado">
                    <button
                    onClick={() => {armadoCompra(cliente)}}
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Comprar
                    </button>
                 </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>

  )
}
export default Pago