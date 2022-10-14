import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

export default function AddToCart({ product, currentProduct }) {
  const { addItem, incrementItem, decrementItem } = useShoppingCart();

  const handleAddItem = () => {
    addItem(product);
    toast.success(`${product.name} is added to your cart!`);
  };
  
  const handleIncrement = (id) => {
    incrementItem(id)
  }

  const handleDecremnet = (id) => {
    decrementItem(id)
  }

  // We need to include functionality to increment and decrement quantity

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
        <div className="flex border-white ml-auto pr-0">
          <button 
            className="flex text-lg text-white bg-blue-900 border-0 py-1 px-6 
          focus:outline-none hover:bg-blue-800 rounded-l font-normal"
          onClick={() => handleDecremnet(product.id)}
          >
            -
          </button>
          <span className="flex justify-center items-center text-xs w-10 h-100 
          font-semibold text-blue-800 bg-white ">
            {currentProduct[0].quantity}
          </span>
          <button 
            className="flex text-lg text-white bg-blue-900 border-0 py-1 px-6 
          focus:outline-none hover:bg-blue-800 rounded-r font-normal"      
            onClick={() => handleIncrement(product.id)}
          >
            +
          </button>
        </div>
      )}
    </>
  );
}
