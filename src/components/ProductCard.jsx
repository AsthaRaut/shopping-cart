import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext)

  return (
    <div>
      <img src={product.image} width="100" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={() =>
        dispatch({ type: "ADD_TO_CART", product })
      }>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard