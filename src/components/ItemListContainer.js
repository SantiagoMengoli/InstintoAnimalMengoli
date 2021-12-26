import "./ItemListContainer.css"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

function ItemListContainer() {
    const productList =[
        {id : 1 , nombre : "Lobo" , stock : '3' , precio: "$1500"},
        {id : 2 , nombre : "Tigre" , stock : "3" , precio: "$1500"},
        {id : 3 , nombre : "Gallo" , stock : "3" , precio: "$1500"},
        {id : 4 , nombre : "Leon" , stock : "3" , precio: "$1500"},
        {id : 5 , nombre : "Pitbull" , stock : '3' , precio: "$1500"},
    ]
    return (
        <div>
            <ItemList productList = {productList} />
            <ItemCount stock={25} initial={1}/> 
        </div>
    )
}

export default ItemListContainer
