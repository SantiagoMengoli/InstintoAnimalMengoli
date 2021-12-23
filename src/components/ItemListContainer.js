import "./ItemListContainer.css"
import ItemCount from "./ItemCount"

function ItemListContainer() {
    return (
        <div>
            <ItemCount stock={25} initial={1}/> 
        </div>
    )
}

export default ItemListContainer
