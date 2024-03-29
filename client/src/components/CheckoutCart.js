import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import useCheckout from "utils/useCheckout";

export default function CheckoutCart() {

  const { cartCount } = useShoppingCart();
  const handleCheckout = useCheckout();

  return (
    <button
      className="inline-flex items-center bg-blue-900 border-0 py-1 px-3 
      focus:outline-none hover:bg-blue-800 rounded text-white md:mt-0"
      onClick={handleCheckout}
      disabled={!cartCount}
    >
      Go To Checkout
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  );
}
