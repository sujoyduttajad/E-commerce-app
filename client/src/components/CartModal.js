// @ts-nocheck
import React from "react";
import Modal from "react-modal";
import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./CartItem";

Modal.setAppElement("#root");

export default function CartModal({ isModalOpen, toggleModal }) {
  const { cartCount, formattedTotalPrice, cartDetails } = useShoppingCart();

  // convert the Object inside object structure of cartDetails into an Array of objects
  const cartItems = Object.keys(cartDetails).map((key) => cartDetails[key]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      contentLabel="Cart Modal"
      closeTimeoutMS={500}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div
        className="flex items-center justify-center fixed left-0 bottom-0 w-full 
      h-full bg-gray-800"
      >
        <div className="bg-white rounded-lg w-80 sm:w-1/2 md:w-2/3 lg:w-1/2">
          <div className="flex flex-col items-start p-4 full m">
            <div className="flex justify-between items-center w-full mb-4">
              <div className="flex justify-between text-gray-900 font-medium text-lg">
                Cart Summary: {formattedTotalPrice} ({cartCount} Items)
              </div>
              <button
                onClick={toggleModal}
                className="focus:outline-none bg-transparent hover:bg-gray-700 
                 hover:text-white rounded mr-3 md:ml-auto p-1 pl-2 pr-2 w-28
                 flex flex-wrap items-center text-base justify-center cursor-pointer"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-4 ml-1 rotate-90 pr-1"
                  viewBox="0 0 20 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>{" "}
                Back
              </button>
            </div>
            <hr />
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="ml-auto mt-4">
              <button
                className="focus:outline-none bg-blue-900 hover:bg-blue-800 
                text-white font-semibold py-2 px-4 rounded"
                style={{ marginRight: 4 }}
              >
                Checkout Now
              </button>
              <button
                className="focus:outline-none bg-transparent hover:bg-gray-500 
              text-blue-900 font-semibold hover:text-white py-2 px-4 border 
              border-blue-500 hover:border-transparent rounded"
              >
                Still Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
