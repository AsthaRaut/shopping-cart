import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, dispatch } = useContext(CartContext)

  return (
    <div>
      <h1>Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Quantity: {item.quantity || 1}</p>

          <button onClick={() =>
            dispatch({
              type: "UPDATE_QUANTITY",
              id: item.id,
              amount: 1
            })
          }>
            +
          </button>

          <button onClick={() =>
            dispatch({
              type: "UPDATE_QUANTITY",
              id: item.id,
              amount: -1
            })
          }>
            -
          </button>

          <button onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              id: item.id
            })
          }>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Checkout