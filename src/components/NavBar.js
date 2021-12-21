import "./NavBar.css"
import logo from "../img/logoinstintoanimal.jpg"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

function NavBar () {
    return(
        <div className="navBar--Container">
            <header className="header">
                <img src={logo} alt="logo" className="navLogo"/>
            </header>
            <nav className="navBar">
                <a className="navBar--Word" href="#">Inicio</a>
                <a className="navBar--Word" href="#">Catalogo 2022</a>
                <a className="navBar--Word" href="#">Contacto</a>
                <a className="navBar--Word" href="#"> <ShoppingCartOutlinedIcon/> </a>
                
            </nav>
        </div>
    )
}

export default NavBar;