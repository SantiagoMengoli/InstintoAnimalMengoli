import React from 'react'
import { useEffect, useState } from 'react'
import Item from './Item'



function ItemList() {

const [productos , setProductos] = useState ([
    {id : 1 , nombre : "Lobo" , stock : '3' , precio: "$1500"},
    {id : 2 , nombre : "Tigre" , stock : "3" , precio: "$1500"},
    {id : 3 , nombre : "Gallo" , stock : "3" , precio: "$1500"},
    {id : 4 , nombre : "Leon" , stock : "3" , precio: "$1500"},
    {id : 5 , nombre : "Pitbull" , stock : '3' , precio: "$1500"},
])
const [loading, setLoading] = useState ([true])

useEffect(() => {
   const promesa = new Promise ((res, rej) =>{
    setTimeout(()=>{
        res(productos)
        setLoading(false)
    },2000)

   })
   promesa.then((productos) =>{
       console.log(productos)
       setProductos(productos)
   })
}, [])
    if(loading){
        return (
            <div>
                <p>Cargando Productos...</p>
            </div>
        )

    }else{
        return (
            <div>
                <Item/>
            </div>
        )
    }
}

export default ItemList
