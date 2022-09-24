// import { useEffect } from "react";

export const useGetItems = () => {
  //   useEffect(() => {
  //     function getCartValues() {
  //         const price = JSON.parse(localStorage.getItem("cart-values"));
  //         const totalPrice = price.totalPrice;
  //         const cartCount = price.cartCount;
  //         return price;
  //     }
  //     getCartValues();
  //   }, [cartCount]) ;

  const price = JSON.parse(localStorage.getItem("cart-values"));
  const totalPrice = price.totalPrice;
  const cartCount = price.cartCount;

  return [totalPrice, cartCount];
};
