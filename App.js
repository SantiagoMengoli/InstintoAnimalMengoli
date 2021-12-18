import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer titulo="Modelos de Gorras" stock={100}/>
    </div>
  );
}

export default App;
