import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import formatProductPrice from "utils/formatProductPrice";

export default function CartItem({ cartItem }) {
  const { setItemQuantity } = useShoppingCart();

  const handleSetItemQuantity = (event) => {
    setItemQuantity(cartItem.id, parseInt(event.target.value, 10));
  };

  return (
    <div className="flex w-full">
      <div
        className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-4 
      w-full justify-between"
      >
        <div className="flex">
          <img
            className="h-16 w-16 rounded-full object-cover mx-1"
            src={cartItem.image}
            alt={cartItem.name}
          />
          <p className="text-gray-600 text-lg mx-2">
            <span className="font-bold">{cartItem.name}</span> <br />
            {formatProductPrice(cartItem)} x {cartItem.quantity}
          </p>
        </div>
        <div>
          <input
            style={{ width: 60 }}
            className="border-solid border-2 pl-3 focus:outline-none"
            defaultValue={cartItem.quantity}
            onChange={(event) => handleSetItemQuantity(event)}
            type="number"
            min={0}
          />
        </div>
      </div>
    </div>
  );
}
