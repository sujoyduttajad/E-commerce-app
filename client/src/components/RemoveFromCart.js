import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

export default function RemoveFromCart({ product, currentProduct }) {
  const { removeItem, cartCount } = useShoppingCart();

  const handleRemoveItem = () => {
    if(currentProduct.length !== 0) {
      removeItem(product.id);
      toast.success(`${product.name} is removed from your cart!`);
    }
  };

  return (
    <button
      className="flex ml-2 text-indigo-900 bg-yellow-100 border-0 py-2 px-6 
      focus:outline-none hover:bg-yellow-200 rounded font-medium"
      onClick={handleRemoveItem}
      disabled={currentProduct.length === 0}
      style={{
        cursor: `${currentProduct.length !== 0 ? "pointer" : "not-allowed"}`,
        opacity: `${currentProduct.length !== 0 ? 1 : 0.5}`,
      }}
    >
      Remove Item
    </button>
  );
}
