import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "utils/useDimension";
import CartSummary from "./CartSummary";
import CheckoutCart from "./CheckoutCart";
import { LogoIcon, SearchGrayIcon } from "./Icons";

export default function Navbar() {
  const { width } = useWindowDimensions();
  return (
    <header className="sticky top-0 z-30 w-full text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-5 flex-col md:flex-row ">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="flex items-center justify-center ml-3 text-xl">
            <LogoIcon 
              paramWidth={`${width < 450 ? '180' : ''}`} 
              paramHeight={`${width < 450 ? '49' : ''}`} 
            />
          </span>
        </Link>
        {/* Search Bar */}
        <div className="relative flex  items-center sm:mb-3 lg:mb-0">
          <form className="lg:w-96">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3">
              <SearchGrayIcon paramWidth={20} paramHeight={20} />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 bg-gray-200 text-gray-900 text-sm leading-loose 
            rounded focus:ring-4 lg:min-w-full max-w-full lg:w-full w-80 pl-10 py-1.5  "
              placeholder="Search here"
            />
            <button
              className="flex absolute lg:right-1.5 bottom-1 right-1 items-center bg-blue-900 border-0 px-3 
                focus:outline-none hover:bg-blue-800 rounded text-white md:mt-0 
                 font-medium text-md px-4 py-1"
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex flex-nowrap justify-between  lg:mt-0 mt-2">
          <CartSummary />
          <CheckoutCart />
        </div>
      </div>
    </header>
  );
}
