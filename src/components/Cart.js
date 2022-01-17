import { useContext } from "react"
import { contexto } from "./CartContext"

function Cart() {

   const {carrito , precio_total} = useContext(contexto)
    console.log (carrito)

    return (
        <div>
            <h1>Carrito de compras</h1>
            <p>Monto a Pagar: ${precio_total}</p>

        </div>
    )
}

export default Cart
