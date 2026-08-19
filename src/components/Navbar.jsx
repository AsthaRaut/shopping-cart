import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext)

  return (
    <nav>
      <a href="/">Home</a>
      <a href="/checkout">Checkout 🛒 {cart.length}</a>
    </nav>
  );
}

export default Navbar