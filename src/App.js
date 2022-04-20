import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar>  
      <CartWidget/>
      </NavBar>
      {/* <h1 className="text-3xl font-bold underline">Bienvenidos</h1> */}
      
      <div className='grid grid-cols-3 gap-4 place-items-stretch h-56 mt-8'>
      <ItemListContainer name="Jabones vegetales" description="A base de glicerinay aceites esenciales"/>
      <ItemListContainer name="Aromatizadores terapeuticos" description="Variedad de aromas"/>
      <ItemListContainer name="Velas de soja aromatizantes" description="Variedad de aromas"/>
      <ItemListContainer name="Box aromas" description="Variedad de aromas"/>
      <ItemListContainer name="Mascarilla facial" description="A base de arcilla blanca y hiervas"/>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
