import React, {useEffect} from 'react'

export const useGetItems = () => {
  
  useEffect(() => {
    function getCartValues() {
        const price = localStorage.getItem("cart-values");
        const totalPrice = JSON.parse(price).totalPrice;
        const cartCount = JSON.parse(price).cartCount;
        return { totalPrice, cartCount }
    }
    getCartValues();
  }, [localStorage.getItem("cart-values")]) ;
  
  
  return;
}
