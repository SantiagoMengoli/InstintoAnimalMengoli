import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({product}) {

    const {nombre , precio , foto,  stock , initial} = product

    return (
        <div className='itemDetailContainer'>
            <p>{nombre}</p>
            <p>Precio: ${precio}</p>
            <p>{foto}</p>
            <ItemCount stock = {stock} initial= {initial}/>
        </div>
    )
    
    

} 

export default ItemDetail
