import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

export default function AddToCart({ product, currentProduct }) {
  const { addItem } = useShoppingCart();

  const handleAddItem = () => {
    addItem(product);
    toast.success(`${product.name} is added to your cart!`);
  };

  return (
    <>
      {currentProduct.length === 0 ? (
        <button
          className="flex ml-auto text-white bg-blue-900 border-0 py-2 px-6 
    focus:outline-none hover:bg-blue-800 rounded font-normal"
          onClick={handleAddItem}
        >
          Add To Cart
        </button>
      ) : (
        <div className="flex border-white ml-auto px-6">
          <button className="flex  text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded-l font-normal">
            -
          </button>
          <button className="flex ml-auto text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded-r font-normal">
            +
          </button>
        </div>
      )}
    </>
  );
}
