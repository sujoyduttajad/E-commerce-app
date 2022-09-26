import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

export default function AddToCart({ product }) {
  const { addItem } = useShoppingCart();

  const handleAddItem = () => {
    addItem(product);
    toast.success(`${product.name} is added to your cart!`);
  };

  return (
    <button
      className="flex ml-auto text-white bg-blue-900 border-0 py-2 px-6 
      focus:outline-none hover:bg-blue-800 rounded"
      onClick={handleAddItem}
    >
      Add To Cart
    </button>
  );
}
