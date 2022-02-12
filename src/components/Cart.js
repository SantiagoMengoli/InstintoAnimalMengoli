import { useContext, useState } from "react"
import { contexto } from "./CartContext"
import "./Cart.css"
import CartItem from "./CartItem"
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";


function Cart() {

    const { carrito, precio_total, limpiarCarrito } = useContext(contexto)
    const [order, setOrder] = useState(false)

    const createOrder = () => {
        const productosCollection = collection(db, "orders");

        const user = {
            nombre: "Santiago",
            email: "santiago@gmail.com",
            telefono: "1163263256"
        }

        const order = {
            user,
            carrito,
            created_at: serverTimestamp()
        }

        const request = addDoc(productosCollection, order)

        request
            .then((result) => {
                setOrder(result.id)
                toast.success("Su compra se ha realizado con exito: Orden " + result.id)
                
            })
            .catch((error) => {
                alert("Se ha producido un error " + error)
            })
            .finally((res) => {
                limpiarCarrito();
            })
    }



    if (carrito.length > 0) {
        return (<div className="cart" >
            <h1 className="tituloCarrito">Carrito de compras</h1>
            <div className="cartContainer">
                {carrito.map((i) => <CartItem key={i.id} producto={i.producto} contador={i.cantidad} />)}
                <p className="letraPrecio_total"> Precio total: ${precio_total()}</p>
            </div>

            <div className="buttonContainer">
                <button onClick={limpiarCarrito}>Vaciar Carrito</button>
                <button className="finalizarCompra" onClick={createOrder}>Finalizar Compra</button>
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
