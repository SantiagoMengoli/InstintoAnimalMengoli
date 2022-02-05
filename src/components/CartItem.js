import React, { useContext } from 'react'
import { contexto } from './CartContext'
import "./CartItem.css"


function CartItem({ producto, contador, id }) {

    const { eliminarProducto } = useContext(contexto)
    const { nombre, foto } = producto;

    return (
        <div className='cartItem'>
            <h4>{nombre}</h4>
            <img className='fotoItemCart' src={foto} style={{ width: '65px', height: '65px' }} alt={nombre} />
            <button onClick={() => eliminarProducto(id)}>Eliminar</button>
            <p>Cantidad: {contador}</p>

        </div>
    )
}

export default CartItem
