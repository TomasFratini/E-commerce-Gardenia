import { addDoc, collection, getFirestore } from "firebase/firestore"
import { createContext, useContext, useState } from "react"


const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {

	const [cart, setCart] = useState([])

	// Si esta en el carrito?

	const isInCart = (id) => {
		return cart.find(producto=> producto.id === id)

	}

	// Agregar item al carrito

	const addToCart = (producto, cantidad) => {
		const newCart = [...cart]
		
		const productIsInCart = isInCart(producto.id)

		if (productIsInCart) {
			newCart[newCart.findIndex((prod) => prod.id === productIsInCart.id)].quantity += cantidad
			
			setCart(newCart)
			return
		}
		producto.quantity = cantidad
		setCart([...newCart, producto])
	}

	// Contar items

	const contar = () => {
		const newCart = [...cart]
		let iTotal = 0
		newCart.forEach(e => iTotal += e.quantity)
		return iTotal
		
	}

	// Eliminar item del carrito

	const delateFromCart = (id) => {
		
		const delateProduct = cart.filter(prod => prod.id !== id)

		setCart(delateProduct)
	}

	// Vaciar carrito

	const delateCart = () => setCart([])

	// Precio Total

	const PrecioTotal = () => {
		const newCart = [...cart]
		let pTotal = 0
		newCart.forEach(e => pTotal += (e.precio * e.quantity))
		return pTotal

	}
	
	const [idCompra, setIdCompra] = useState("")

	const armadoCompra = async (datos) => {
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

		delateCart()
		
	
		const db = getFirestore()
		const comprasColeccion = collection(db, "orders")
	
		
		const respuesta = await addDoc(comprasColeccion, compra)
		setIdCompra(respuesta.id)
		console.log(respuesta.id);
	}	

	// Para pago finalizado



	return <CartContext.Provider value={{
			cart,
			contar,
			PrecioTotal,
			addToCart,
			delateFromCart,
			delateCart,
			setCart,
			armadoCompra,
			idCompra
		}}>{children}</CartContext.Provider>
			
		
}

export default CartContextProvider