import React from 'react'
import { contexto } from './CartContext'


function CartItem({producto}) {

    const {eliminarProducto} = contexto()
    const {nombre, precio, foto, id} = producto;

    return (
        <div>
            <h4>{nombre}</h4>
            <img src={foto}  style={{width:'65px' , height:'65px'}}/>
            
        </div>
    )
}

export default CartItem
