import { NavLink } from 'react-router-dom'

const Item = ({ product }) => {

  return (
    <div id="products">
      <img src={product.image} alt={product.product} className="images"/>
      <p>{product.product}</p>
      <p>{product.brand}</p>
      <strong>${product.price}</strong>
      <NavLink to={`product/${product.id}`}>
        <button className="details">Ver detalle</button>
      </NavLink>
    </div>
  )
}

export { Item }