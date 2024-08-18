'use client';

import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import productsData from '../../../data/products.json';

const ProductPage = ({ params }) => {
  const { id } = params;

  // Find the product based on the id from the URL
  const product = productsData.find((product) => product.id === parseInt(id));

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const [showCartModal, setShowCartModal] = useState(false);
  const [showWishlistModal, setShowWishlistModal] = useState(false);

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    setShowCartModal(true);

    // Hide the cart modal after a few seconds
    setTimeout(() => {
      setShowCartModal(false);
    }, 4000);
  };

  const handleAddToWishlist = () => {
    addToWishlist({ ...product, quantity: 1 });
    setShowWishlistModal(true);

    // Hide the wishlist modal after a few seconds
    setTimeout(() => {
      setShowWishlistModal(false);
    }, 4000);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-96 w-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price.toFixed(2)}</p>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center"
            >
              <ShoppingCartIcon className="h-6 w-6 mr-2" />
              Add to Cart
            </button>

            <button
              onClick={handleAddToWishlist}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 flex items-center"
            >
              <HeartIcon className="h-6 w-6 mr-2" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {showCartModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{product.name} has been added to your cart!</h3>
            <button
              onClick={() => setShowCartModal(false)}
              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
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
            <button
              onClick={() => setShowWishlistModal(false)}
              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
