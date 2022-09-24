import React, { useState } from "react";
import formattedNetPrice from "utils/formattedNetPrice";
import CartModal from "./CartModal";
import { CartIcon } from "./Icons";

export default function CartSummary() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const price = localStorage.getItem("cart-values");
  const netPrice = JSON.parse(price).totalPrice;
  const cartCountLS = JSON.parse(price).cartCount;
  
  return (
    <React.Fragment>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <span className="mr-5 hover:text-white flex items-center">
          <CartIcon />
          <span className="ml-3">
            {formattedNetPrice(netPrice)} ({cartCountLS})
          </span>
        </span>
      </nav>
      <CartModal />
    </React.Fragment>
  );
}
