import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './Context/CartContext';
import AppContextProvider from './Context/AppContext';



function App() {
  return (

    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter> 
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/productos/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
