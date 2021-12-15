import "./NavBar.css"
import logo from "../img/logoinstintoanimal.jpg"

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
                <a className="navBar--Word" href="#">Carrito de Compras </a>
            </nav>
        </div>
    )
}

export default NavBar;