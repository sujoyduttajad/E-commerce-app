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
      <nav
        onClick={toggleModal}
        className="md:ml-auto hover:bg-sky-500 p-3 flex flex-wrap items-center text-base justify-center cursor-pointer"
      >
        <span className="mr-5 hover:text-white flex items-center">
          <CartIcon />
          <span className="ml-3">
            {formattedTotalPrice} ({cartCount})
          </span>
        </span>
      </nav>
      <CartModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </React.Fragment>
  );
}
