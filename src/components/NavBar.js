import "./NavBar.css"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import logo from "../images/logoinstintoanimal.jpg"
import { Link } from "react-router-dom";

function NavBar () {
    return(
        <div className="navBar--Container">
            <header className="header">
                <img src={logo} alt="logo" className="navLogo"/>
            </header>
            <nav className="navBar">
                <Link className="navBar--Word" to={"/inicio"}>Inicio</Link>
                <Link className="navBar--Word" to={"/catalogo2022"}>Catalogo 2022</Link>
                <Link className="navBar--Word" to={"/contacto"}>Contacto</Link>
                <Link className="navBar--Word" to={"/carrito"}> <ShoppingCartOutlinedIcon/> </Link>
                
            </nav>
        </div>
    )
}

export default NavBar;