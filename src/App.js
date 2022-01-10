import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import MainFoto from "./components/MainFoto"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <MainFoto/>
          <ItemListContainer />
          <Routes>
            <Route path="/"  element={<ItemList/>}/>
            <Route path="/category/:id"  element={<ItemList/>}/>
            <Route path="/product/:id"  element={<ItemListContainer/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
