import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

function ItemDetail({product}) {
    
    const [mostrarBotonCompra, setMostrarBotonCompra] = useState(false)
    const [compra, setCompra] = useState ({})
    const {nombre , precio , foto,  stock , initial} = product
   
    const onAdd =(contador) =>{
        setCompra ({
            ...product,
            contador
        })
        setMostrarBotonCompra (true);
    }
    return (
        <div className='itemDetailContainer'>
            <p>{nombre}</p>
            <p>Precio: ${precio}</p>
            <img src={foto}/>
            <div>
                {
                    mostrarBotonCompra
                    ?
                    <div>
                        <div>
                          <p><b>Cantidad Seleccionada: {compra.contador} </b></p>
                        </div>
                    <Link to= "/cart" > <button>Finalizar Compra</button></Link>
                    </div>
                    :
                    <div><ItemCount  onAdd={onAdd} stock = {stock} initial= {initial}/></div>
                }
            </div>
            
        </div>
    )
    
    

} 

export default ItemDetail
