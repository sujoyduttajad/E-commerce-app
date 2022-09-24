import React, {useEffect} from 'react'
import { useShoppingCart } from 'use-shopping-cart';

export const useGetItems = () => {
    const { cartCount } = useShoppingCart();
  
  useEffect(() => {
    function getCartValues() {
        const price = JSON.parse(localStorage.getItem("cart-values"));
        const totalPrice = price.totalPrice;
        const cartCount = price.cartCount;
        return price;
    }
    getCartValues();
  }, [cartCount]) ;
  
  
  return;
}
