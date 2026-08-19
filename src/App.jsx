import { Routes, Route } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import  ProductCard from "./components/ProductCard";
import { CartContext } from "./context/CartContext";
import useDebounce from "./hooks/useDebounce";
import useFetch from "./hooks/useFetch";
import Checkout from "./pages/Checkout"
import Home  from "./pages/Home"
import  ProductDetails  from "./pages/ProductDetails";


function App() {
  return (
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/product/:id" element={<h1>Product</h1>} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
      </Routes>
      
  );
}

export default App;
