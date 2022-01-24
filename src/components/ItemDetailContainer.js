import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from "../Firebase"
import {collection, getDocs} from "firebase/firestore"


console.log(db)

function ItemDetailContainer() {

    const [product, setProduct] = useState ([])
    const [loading, setLoading] = useState (true)

    const {id} = useParams()
    
   /* const productDetail =[
        {id : 1 , nombre : "Ciervo" , stock : '3' , precio: "$1500" , foto: "/img/ciervo.jpg"},
        {id : 2 , nombre : "Tigre" , stock : "3" , precio: "$1500" , foto: "/img/tigre.jpg"},
        {id : 3 , nombre : "Gallo" , stock : "3" , precio: "$1500", foto: "/img/gallo.jpg"},
        {id : 4 , nombre : "Elefante" , stock : "3" , precio: "$1500" , foto: "/img/elefante.jpg"},
        {id : 5 , nombre : "Pitbull" , stock : '3' , precio: "$1500" ,foto: "/img/pitbull.jpg"},
    ]*/

    useEffect(() => {

        const coleccionProductos = collection(db, "productos")
        const pedido = getDocs (coleccionProductos)

        pedido
            .then((resultado) => {
                const docs = resultado.docs
               const docs_formateado = docs.map(doc=>{
                    const producto = {
                        id: doc.id,
                        ...doc.data()
                    }
                    return producto
                })
                setProduct(docs_formateado)
                setLoading(false)
            })
            .catch ((error) => {
                console.log(error)
            })


      /*  const item = productDetail.filter((product) => {
            return product.id === +id;
        }); 

        const getItem = new Promise ((res , rej) => {
            if (item.length === 0) {
                rej("Producto no disponible")
            }
            setTimeout (() => {
                res (item);
            },2000);

        });
        getItem.then((product) => {
            setProduct(product);
            setLoading(false);
        })
        .catch((err) => console.log(err));*/
    }, [id]);

    if(loading === true) {
        return (
            <>
                <h2>...Loading</h2>           
            </>
        );
    }
    if(loading === false){
        return (
            <>
               {product.map((product) => (
                    <ItemDetail key={id} product={product}/>
                ))} 
            </>
        )}

}

export default ItemDetailContainer
