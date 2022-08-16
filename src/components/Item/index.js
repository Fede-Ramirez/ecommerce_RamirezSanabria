import { NavLink } from 'react-router-dom'

const Item = ({ product }) => {

  return (
    <div id="products">
      <img src={product.image} alt={product.product} className="images"/>
      <p>{product.product}</p>
      <p>{product.brand}</p>
      <strong>${product.price}</strong>
      <button className="details">
        <NavLink to={`product/${product.id}`}>
          <a href="#" className="details__link">Ver detalle</a>
        </NavLink>
      </button>
    </div>
  )
}

export { Item }