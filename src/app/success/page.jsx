// src/app/success/page.jsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-6">Thank You for Your Purchase!</h1>
      <p>Your order has been successfully placed.</p>
      <Link href="/" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Return to Home
      </Link>
    </div>
  );
}
