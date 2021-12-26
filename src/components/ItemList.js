import React from 'react'
import { useEffect, useState } from 'react'
import Item from './Item'
import "./ItemList.css"



function ItemList({productList}) {

const [productos , setProductos] = useState ([
 
])
const [loading, setLoading] = useState ([true])

useEffect(() => {
   const promesa = new Promise ((res, rej) =>{
    setTimeout(()=>{
        res(productList)
        setLoading(false)
    },2000)

   })
   promesa.then((productos) =>{
       console.log(productos)
       setProductos(productos)
   })
}, [])

        return (
            <div className='itemList'>
                {loading ? (<div> Cargando Productos...</div>) : (productos.map((producto) => <Item key={producto.id} producto ={producto}/>))}
            </div>
        )
}

export default ItemList
