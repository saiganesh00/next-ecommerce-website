'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext'; // Import wishlist context

const ProductCard = ({ product }) => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false); // State for wishlist modal
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Use wishlist context

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    setShowCartModal(true);

    // Hide the cart modal after a few seconds
    setTimeout(() => {
      setShowCartModal(false);
    }, 4000);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setShowWishlistModal(true);

    // Hide the wishlist modal after a few seconds
    setTimeout(() => {
      setShowWishlistModal(false);
    }, 4000);
  };

  return (
    <div className="border rounded-lg shadow-md p-4 relative">
      <Link href={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-lg mb-4 cursor-pointer" />
      </Link>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-blue-600 mb-4">${product.price.toFixed(2)}</p>
      <div className="flex space-x-2">
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 flex items-center justify-center"
        >
          <ShoppingCartIcon className="h-6 w-6" />
        </button>
        <button
          onClick={handleAddToWishlist}
          className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 flex items-center justify-center"
        >
          <HeartIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Cart Modal */}
      {showCartModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{product.name} has been added to your cart!</h3>
            <Link href="/cart">
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                Check Cart
              </button>
            </Link>
            <button
              onClick={() => setShowCartModal(false)}
              className="ml-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Wishlist Modal */}
      {showWishlistModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{product.name} has been added to your wishlist!</h3>
            <Link href="/wishlist">
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                View Wishlist
              </button>
            </Link>
            <button
              onClick={() => setShowWishlistModal(false)}
              className="ml-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
