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

	// Eliminar item del carrito

	const delateFromCart = (producto) => {
		const newCart = [...cart]

		const productIsInCart = isInCart(producto.id)

		if (!productIsInCart) {
			return
		}

		const delateProduct = newCart.filter((prod) => prod.id !== producto.id)

		setCart(delateProduct)
	}

	const delateCart = () => setCart([])

	console.log(cart)

	return <CartContext.Provider value={{
			cart,
			addToCart,
			delateFromCart,
			delateCart,
			setCart,
		}}>{children}</CartContext.Provider>
			
		
}

export default CartContextProvider