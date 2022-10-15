import React from "react";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import CheckoutCart from "./CheckoutCart";
import { LogoIcon } from "./Icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="flex items-center justify-center ml-3 text-xl">
            <LogoIcon paramWidth="" paramHeight="" />
          </span>
        </Link>
        <div className="flex flex-nowrap">
          <CartSummary />
          <CheckoutCart />
        </div>
      </div>
    </header>
  );
}
