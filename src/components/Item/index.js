const Item = ({ product }) => {

  return (
    <div id="products">
      <img src={product.image} alt={product.product} className="images"/>
      <p>{product.product}</p>
      <p>{product.brand}</p>
      <strong>${product.price}</strong>
      <button className="details">
          <a href="#" className="details__link">Ver detalle</a>
      </button>
    </div>
  )
}

export { Item }