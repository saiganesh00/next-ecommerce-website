'use client';

import React from 'react';
import { useCart } from './context/CartContext';
import ProductCard from './components/ProductCard';
import productsData from '../data/products.json';
import Link from 'next/link';

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto p-4 relative">
      <div className="flex justify-between items-center mb-6">
        {/* <h1 className="text-3xl font-bold">EKART</h1>
        <Link href="/cart" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
          Go to Cart
        </Link> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
