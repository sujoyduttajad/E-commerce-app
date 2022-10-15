import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartModal from "./CartModal";
import { CartIcon } from "./Icons";

export default function CartSummary() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { formattedTotalPrice, cartCount } = useShoppingCart();

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <React.Fragment>
      <button
        onClick={toggleModal}
        className="focus:outline-none bg-transparent hover:bg-gray-700 
        hover:text-white rounded mr-3 md:ml-auto p-1 pl-3 sm:bg-gray-700 
        flex flex-wrap items-center text-base justify-center cursor-pointer"
      >
        <span className="mr-5 flex items-center">
          <CartIcon />
          <span className="ml-3">
            {formattedTotalPrice} ({cartCount})
          </span>
        </span>
      </button>
      <CartModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </React.Fragment>
  );
}
