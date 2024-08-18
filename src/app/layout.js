import { WishlistProvider } from './context/WishlistContext';
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from './context/CartContext';
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EKART",
  description: "Ecommerce Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <CartProvider>
          <WishlistProvider>
            <main className="flex-grow">{children}</main>
          </WishlistProvider>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
