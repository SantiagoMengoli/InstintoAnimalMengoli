import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import {contexto} from "./CartContext"
import "./ItemDetail.css"

function ItemDetail({product, id}) {
    
    const [mostrarBotonCompra, setMostrarBotonCompra] = useState(false)
    const [cantidad, setCantidad] = useState(0)
    const {nombre , precio , foto,  stock , detalle, initial} = product
    const {agregarProducto} = useContext (contexto)
   
const item = {
    producto: product,
    id: id,
    cantidad: +cantidad
}

    const onAdd = (contador) =>{

    setCantidad(contador)
    }

    return (
        <div className='itemDetail'>
            <p>{nombre}</p>
            <p>Precio: ${precio}</p>
            <p>{detalle}</p>
            <img className='fotoDetalle'  src={foto}/>
            <div >
                {
                    mostrarBotonCompra
                    ?
                    <div>
                        <div>
                     
                        </div>
                    <Link to= "/cart" > <button>Finalizar Compra</button></Link>
                    </div>
                    :
                    <div><ItemCount  onAdd={onAdd} stock = {stock} initial={1}/></div>

                }
                <div className='botonAgregarCarrito'>
                    <button onClick={() => agregarProducto(item)}>Agregar al Carrito</button>
                </div>
                
            </div>
            
        </div>
    )
    
    

} 

export default ItemDetail
