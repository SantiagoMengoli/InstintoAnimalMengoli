import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock , initial }) => {

    const [contador, setContador] = useState(0)

    const aumentarContador = () => {
       if(contador < stock) setContador(contador + 1)
    }
    const disminuirContador = () => {
       if(contador >= initial) setContador (contador - 1)
    }

    return (
        <div className="itemCount--Container">
            <div className="contadorContainer">
                <p>Cantidad: {contador} </p>
                <div className="button">
                    <button onClick={disminuirContador}>-</button>
                    <button onClick={aumentarContador}>+</button>
                </div>
                
            </div>
        </div>
    )
}

export default ItemCount

