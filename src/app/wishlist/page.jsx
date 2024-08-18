'use client';

import React from 'react';
import Link from 'next/link';
import { useWishlist } from '../context/WishlistContext';

export default function WishlistPage() {
  const { wishlist, removeItem } = useWishlist();

  return (
    <div className="container mx-auto p-4">
      {/* Header with EKART */}
      <div className="flex justify-between items-center mb-6">
        {/* <Link href="/" className="text-3xl font-bold text-blue-600 hover:text-blue-800">
          EKART
        </Link> */}
        <h1 className="text-2xl font-bold text-center flex-grow">Wishlist</h1>
      </div>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-md p-4 relative">
              <Link href={`/products/${item.id}`}>
                <img src={item.image} alt={item.name} className="h-48 w-full object-cover rounded-lg mb-4 cursor-pointer" />
              </Link>
              <Link href={`/products/${item.id}`}>
                <h2 className="text-xl font-semibold mb-2 cursor-pointer">{item.name}</h2>
              </Link>
              <p className="text-blue-600 mb-4">${item.price.toFixed(2)}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
