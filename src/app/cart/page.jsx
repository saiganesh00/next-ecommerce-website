'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation'; 

export default function CartPage() {
  const { cart = [], updateQuantity, removeItem, calculateSubtotal, calculateTotal, applyDiscount, discount } = useCart();
  const [discountValue, setDiscountValue] = useState('');

  const handleApplyDiscount = () => {
    applyDiscount(discountValue);
  };

  const router = useRouter(); // Initialize the useRouter hook

  const handleCheckout = () => {
    // Optionally clear the cart
    // clearCart(); // Add this function in your CartContext if you want to clear the cart

    // Navigate to the checkout page
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header with EKART and Shopping Cart */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-center flex-grow">Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg shadow-md">
                <img src={item.image} alt={item.name} className="h-24 w-24 object-cover rounded-lg" />
                <div className="flex-grow ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-blue-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 bg-gray-200 rounded-lg"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded-lg"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  <TrashIcon className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span className="font-semibold">Subtotal:</span>
                <span className="text-blue-600">${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Discount:</span>
                <span className="text-red-600">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span className="text-blue-600">${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="text"
                value={discountValue}
                onChange={(e) => setDiscountValue(e.target.value)}
                placeholder="Enter discount code"
                className="p-2 border rounded-lg mr-2 flex-grow"
              />
              <button
                onClick={handleApplyDiscount}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
              >
                Apply Discount
              </button>
            </div>
            <div className="mt-6 flex justify-between">
              <Link href="/" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Continue Shopping
              </Link>
              <button
                onClick={handleCheckout}
                className="inline-block bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
