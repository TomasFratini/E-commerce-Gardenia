import { createContext, useContext, useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

function AppContextProvider( {children}) {

   const [items, setItems] = useState([])

   useEffect(() => {
    const db = getFirestore() 

    const productos = collection(db, 'items')

    getDocs(productos).then( (snapshot) => { 
        const productList = []
        snapshot.docs.forEach(s => {
          productList.push( { id: s.id, ...s.data() } )
        });
        setItems(productList)
      })
  }, [])

  return <AppContext.Provider value={{items}}> {children}</AppContext.Provider>
    
  
}
export default AppContextProvider