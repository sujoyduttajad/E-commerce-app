import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

export default function RemoveFromCart({ product }) {
  const { removeItem, cartCount } = useShoppingCart();

  const handleRemoveItem = () => {
    removeItem(product.id);
    toast.success(`${product.name} is removed from your cart!`);
  };

  return (
    <button
      className="flex ml-2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
      onClick={handleRemoveItem}
      disabled={!cartCount}
      // style={{
      //   cursor: `${
      //     cartCount > 0 && cartDetails.name === product.name
      //       ? "pointer"
      //       : "not-allowed"
      //   }`,
      //   opacity: `${
      //     cartCount > 0 && cartDetails.name === product.name ? 1 : 0.5
      //   }`,
      // }}
    >
      Remove Item
    </button>
  );
}
