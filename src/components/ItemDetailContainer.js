import React, { useEffect } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [product, setProduct] = useState ([])
    const [loading, setLoading] = useState ([true])
    const id = 4;
    const productDetail =[
        {id : 1 , nombre : "Ciervo" , stock : '3' , precio: "$1500" , foto: "C:\Users\HP\OneDrive\Escritorio\Clone git\InstintoAnimalMengoli\src\img\Foto Con Fondo para ML Ciervo.jpg"},
        {id : 2 , nombre : "Tigre" , stock : "3" , precio: "$1500" , foto: "C:\Users\HP\OneDrive\Escritorio\Clone git\InstintoAnimalMengoli\src\img\Foto Con Fondo para ML Tigre.jpg"},
        {id : 3 , nombre : "Gallo" , stock : "3" , precio: "$1500", foto: "C:\Users\HP\OneDrive\Escritorio\Clone git\InstintoAnimalMengoli\src\img\Foto Con Fondo para ML.jpg"},
        {id : 4 , nombre : "Elefante" , stock : "3" , precio: "$1500" , foto: "C:\Users\HP\OneDrive\Escritorio\Clone git\InstintoAnimalMengoli\src\img\Foto Con Fondo para ML Elefante.jpg"},
        {id : 5 , nombre : "Pitbull" , stock : '3' , precio: "$1500" ,foto: "C:\Users\HP\OneDrive\Escritorio\Clone git\InstintoAnimalMengoli\src\img\Foto principal ML.jpg"},
    ]

    useEffect(() => {
        const item = productDetail.filter((product) => {
            return product.id === +id;
        }); 

        const getItem = new Promise ((res , rej) => {
            if (item.length === 0) {
                reject("Producto no disponible")
            }
            setTimeout (() => {
                resolve (item);
            },2000);

        });
        getItem.then((product) => {
            setProduct(product);
            setLoading(false);
        })
        .catch((err) => console.log(err));
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
