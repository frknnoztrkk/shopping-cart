import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const emtyCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    setCart,
    emtyCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
