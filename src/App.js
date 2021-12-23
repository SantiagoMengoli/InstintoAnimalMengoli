import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import MainFoto from "./components/MainFoto"


function App() {
  return (
    <div className="App">
        <NavBar/>
        <MainFoto/>
        <ItemListContainer />
    </div>
  );
}

export default App;
