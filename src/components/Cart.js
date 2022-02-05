import { useContext } from "react"
import { contexto } from "./CartContext"
import "./Cart.css"
import CartItem from "./CartItem"

function Cart() {

    const { carrito, precio_total } = useContext(contexto)
    const { limpiarCarrito } = useContext(contexto)


    if (carrito.length > 0) {
        return (<div className="cart" >
            <h1 className="tituloCarrito">Carrito de compras</h1>
            <div className="cartContainer">
                {carrito.map((i) => <CartItem key={i.id} producto={i.producto} contador={i.cantidad} />)}
            </div>
            <div className="buttonContainer">
                <button onClick={limpiarCarrito}>Vaciar Carrito</button>
            </div>
            
            

        </div>)
    } else {
        return (
            <div className="cartContainer">
                <h1>Carrito de compras</h1>
                <h2>No hay productos en el carrito</h2>
            </div>
        )
    }

}

export default Cart
