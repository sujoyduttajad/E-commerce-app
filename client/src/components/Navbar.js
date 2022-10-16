import React from "react";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";
import CheckoutCart from "./CheckoutCart";
import { LogoIcon, SearchIcon } from "./Icons";

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
        {/* Search Bar */}
        <div className="relative">
          <form className="w-96">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3">
              <SearchIcon paramWidth="" paramHeight="" />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-loose 
            rounded focus:ring-blue-500 focus:outline-blue-500 min-w-96 w-full pl-10 p-2.5 pr-"
              placeholder="Search here"
            />
            <button
              className="flex absolute right-1.5 bottom-1.5 items-center bg-blue-900 border-0 px-3 
                focus:outline-none hover:bg-blue-800 rounded text-white md:mt-0 
                focus:ring-4 focus:ring-blue-300 font-medium text-md px-4 py-2"
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex flex-nowrap">
          <CartSummary />
          <CheckoutCart />
        </div>
      </div>
    </header>
  );
}
