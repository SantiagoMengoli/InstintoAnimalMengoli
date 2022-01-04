import "./NavBar.css"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import logo from "../images/logoinstintoanimal.jpg"

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