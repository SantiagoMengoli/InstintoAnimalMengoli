import { useState } from "react"
import "./ItemCount.css"

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const aumentarContador = () => {
        setContador(contador + 1)
    }
    const disminuirContador = () => {
        setContador (contador - 1)
    }

    return (
        <div className="itemCount--Container">
            <div className="contadorContainer">
                <p>Cantidad: {contador} </p>
                <div className="button">
                    <button onClick={disminuirContador} >-</button>
                    <button onClick={aumentarContador} >+</button>
                </div>
                
            </div>
        </div>
    )
}

export default ItemCount

