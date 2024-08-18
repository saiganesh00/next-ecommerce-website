"use client"
import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const existingProduct = prevWishlist.find(item => item.id === product.id);
      if (existingProduct) {
        return prevWishlist; // If the product already exists, don't add it again
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const removeItem = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeItem }}>
      {children}
    </WishlistContext.Provider>
  );
}
