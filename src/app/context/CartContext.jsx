"use client";
import React, { createContext, useContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0); // State to hold discount value

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - discount;
  };

  const applyDiscount = (discountValue) => {
    // Handle percentage or fixed discount
    if (discountValue.includes('%')) {
      const percentage = parseFloat(discountValue.replace('%', ''));
      setDiscount(calculateSubtotal() * (percentage / 100));
    } else {
      setDiscount(parseFloat(discountValue));
    }
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]); // Reset cart to an empty array
    setDiscount(0); // Optionally, reset the discount as well
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        calculateSubtotal,
        calculateTotal,
        applyDiscount,
        clearCart, // Include clearCart in the context value
        discount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
