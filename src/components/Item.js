import React from 'react'
import "./Item.css"

function Item({producto}) {
    const {nombre, precio} = producto  


    console.log(producto)
    return (
        <div className='itemContainer'>
           <p className='itemWord'>Nombre: {nombre} </p> 
           <p className='itemWord'>Precio: {precio} </p> 
        </div>
    )
}

export default Item
