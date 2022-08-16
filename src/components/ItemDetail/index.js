import { ItemCount } from "../ItemCount"

const ItemDetail = ({ listProduct }) => {

    console.log(listProduct)

    return (
        <div className="product_details">
            <img src={listProduct.image} alt={listProduct.product} className="images"/>
            <p>{listProduct.product}</p>
            <p>{listProduct.brand}</p>
            <strong>${listProduct.price}</strong>
            <ItemCount initial={1} stock={10} onAdd={() =>{}}/>
        </div>    
    )
}

export { ItemDetail }