import React, { useState } from "react";
import formattedNetPrice from "utils/formattedNetPrice";
import { useGetItems } from "utils/useGetItems";
import CartModal from "./CartModal";
import { CartIcon } from "./Icons";

export default function CartSummary() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [totalPrice, cartCount] = useGetItems();

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
            {formattedNetPrice(totalPrice)} ({cartCount})
          </span>
        </span>
      </nav>
      <CartModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </React.Fragment>
  );
}
