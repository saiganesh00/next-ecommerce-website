'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold hover:text-gray-300">
          EKART
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/wishlist" className="flex items-center bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
            <HeartIcon className="h-6 w-6 " />
            {/* <span>Wishlist</span> */}
          </Link>
          <Link href="/cart" className="flex items-center bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
            <ShoppingCartIcon className="h-6 w-6 mr-2" />
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
