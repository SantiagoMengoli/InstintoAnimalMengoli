import "./ItemListContainer.css"

function ItemListContainer({titulo, stock}) {
    return (
        <div>
            <h1> {titulo} </h1>
            <p>Cantidad {stock} </p>
        </div>
    )
}

export default ItemListContainer
