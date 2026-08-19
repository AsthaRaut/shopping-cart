import { createContext, useReducer } from "react";

export const CartContext = createContext()

function reducer(cart, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cart, action.product]

    case "REMOVE_FROM_CART":
      return cart.filter(item => item.id !== action.id)

    case "UPDATE_QUANTITY":
      return cart.map(item =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + action.amount }
          : item
      )

    case "CLEAR_CART":
      return []

    default:
      return cart
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, [])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}