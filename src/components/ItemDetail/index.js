import { useState } from "react"
import { ItemCount } from "../ItemCount"
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const ItemDetail = ({ listProduct }) => {

    const [productAdded, setProductAdded] = useState(false)

    const { addToCart, cartList } = useCartContext()

    const onAdd = (quantity) => {
        addToCart(listProduct, quantity)
        setProductAdded(true)
    }

    return (
        <div className="product_details">
            <img src={listProduct.image} alt={listProduct.product} className="images"/>
            <p>{listProduct.product}</p>
            <p>{listProduct.brand}</p>
            <strong>${listProduct.price}</strong>
            {
            productAdded ? 
            <NavLink to="/cart">
                <button id="cart">Ir al carrito</button>
            </NavLink>
            :
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            }
        </div>    
    )
}

export { ItemDetail }