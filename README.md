# EKART - E-commerce Application

EKART is a modern e-commerce application built with Next.js and Tailwind CSS. It provides a seamless shopping experience with features for managing a shopping cart, applying discounts, and handling wishlists. The app also includes a checkout process and a success page for order confirmation.

## Features

### Product Listing
- **View Products**: Display a list of products with images, names, and prices.
- **Add to Cart**: Users can add products to the shopping cart.
- **Add to Wishlist**: Users can add products to their wishlist.

### Shopping Cart
- **Manage Items**: Increase or decrease item quantities in the cart.
- **Remove Items**: Remove items from the cart.
- **Cart Summary**: Shows subtotal, applied discounts, and total price.
- **Apply Discounts**: Support for fixed and percentage-based discounts.
- **Checkout**: Redirect to a checkout page where users can review their order and proceed with the purchase.

### Checkout and Success
- **Order Summary**: Displays all ordered items, subtotal, discount, and total amount.
- **Complete Purchase**: Finalize the order and redirect to a success page.
- **Order Confirmation**: View a thank-you message and return to the homepage.

### Wishlist
- **View Wishlist**: Manage and view products saved for later.

### Persistent Footer
- **Footer Placement**: Footer remains at the bottom of the viewport for consistent layout.

## Project Structure

```plaintext
.
├── public/
│   └── images/               # Static product images
├── src/
│   ├── app/
│   │   ├── cart/             # Cart page
│   │   ├── checkout/         # Checkout page
│   │   ├── success/          # Success page
│   │   ├── wishlist/         # Wishlist page
│   │   └── components/
│   │   |    ├── Header.jsx    # Header component
│   │   |    ├── Footer.jsx    # Footer component
│   |   ├── context/
│   │       ├── CartContext.jsx   # Cart context provider
│   │       ├──WishlistContext.jsx # Wishlist context provider
│   └── data/
│       └── products.json      # Global styles
├── README.md                 # Project documentation
└── package.json              # Project dependencies and scripts
