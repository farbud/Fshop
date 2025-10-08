"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "@/app/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 shadow-md bg-gray-100 dark:bg-gray-800">
      <Link href="/" className="text-2xl  text-gray-100 font-bold mb-2 sm:mb-0">
        Mini<span className="text-blue-500">Store</span>
      </Link>

      <div className="flex items-center text-gray-100 gap-4 sm:gap-6">
        <Link href="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        <Link href="/cart" className="hover:text-blue-500 transition">
          <ShoppingCart
            className="text-gray-700 dark:text-gray-200"
            size={26}
          />
          {cart.length > 0 && (
            <span className=" -top-10 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
        <Link href="/checkout" className="hover:text-blue-500 transition">
          Checkout
        </Link>
        <Link href="/invoice" className="hover:text-blue-500 transition">
          Invoice
        </Link>
        <Link href="/success" className="hover:text-blue-500 transition">
          Success
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
