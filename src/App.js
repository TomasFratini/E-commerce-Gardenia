import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ContainerItem/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './Context/CartContext';
import AppContextProvider from './Context/AppContext';
import Pago from './components/Pago/Pago';
import Footer from './components/Footer/Footer';
import PagoFinalizado from './components/Pago/PagoFinalizado';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';



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
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/pago' element={<Pago/>}/>
            <Route path='/finalizado' element={<PagoFinalizado/>}/>
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
