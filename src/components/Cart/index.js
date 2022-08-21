import { useCartContext } from "../../context/CartContext"
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()
    console.log(cartList)

    return (
        <div>
            {cartList.map(product => 
                <div key={product.id} className="contenedor_cart">
                    <img src={product.image} width="150px" alt={product.product} />
                    <p className="product_properties">{product.product}</p>
                    <p className="product_properties">{product.brand}</p>
                    <p className="product_properties">Cantidad: {product.quantity}</p>
                    <p className="product_properties">${product.price * product.quantity}</p>
                    <button id="remove" onClick={() => removeProduct(product.id)}>X</button>
                </div>
                )}
            {cartList.length === 0 ? 
            <>
            <strong>El carrito esta vacío!</strong> 
            <NavLink to="/">
                <button id="landing">Ve a mirar nuestros productos</button>
            </NavLink>
            
            </>
            :
            <>
                <strong id="total_price">Total de su compra: ${totalPrice()}</strong>
                <button id="clean" onClick={cleanCart}>Vaciar carrito</button>    
            </>}
        </div>
    )
}

export { Cart }