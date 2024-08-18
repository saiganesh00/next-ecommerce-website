'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cart, calculateSubtotal, calculateTotal, discount, clearCart } = useCart();
  const router = useRouter();

  const handleCompletePurchase = () => {
    // Clear the cart after purchase
    clearCart();
    // Navigate to the success page
    router.push('/success');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

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
                <span className="text-gray-600">x{item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
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
            <div className="mt-6">
              <button
                onClick={handleCompletePurchase}
                className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
