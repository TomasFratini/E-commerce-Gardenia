import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';



function App() {
  return (
    <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/productos/:itemId' element={<ItemDetailContainer/>} />
        <Route/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
