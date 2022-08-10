const ItemDetail = ({ listProduct }) => {

    console.log(listProduct)

    return (
        <div className="product_details">
            <img src={listProduct.image} alt={listProduct.product} className="images"/>
            <p>{listProduct.product}</p>
            <p>{listProduct.brand}</p>
            <strong>${listProduct.price}</strong>
            <button className="add_button">Agregar al carrito</button>
        </div>    
    )
}

export { ItemDetail }