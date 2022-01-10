import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import MainFoto from "./components/MainFoto"
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <MainFoto/>
        <ItemListContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
