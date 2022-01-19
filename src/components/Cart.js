import { useContext } from "react"
import { contexto } from "./CartContext"
import "./Cart.css"
import CartItem from "./CartItem"

function Cart() {

   const {carrito , precio_total} = useContext(contexto)
    

    if (carrito.length < 1){
        return (<div>
                    <h1>Carrito de compras</h1>
                {carrito.map((producto) => <CartItem key={producto.id} producto ={producto}/>)}
                <p>Monto a Pagar: ${precio_total}</p>
                   
                </div>)
    }else{
        return ( 
            <div className="cartContainer">
                 <h1>Carrito de compras</h1>
                    <h2>No hay productos en el carrito</h2>
            </div>
        )
    }

}

export default Cart
