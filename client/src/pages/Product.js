// @ts-nocheck
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import formatProductPrice from "../utils/formatProductPrice";
import AddToCart from "../components/AddToCart";
import RemoveFromCart from "../components/RemoveFromCart";
import { useShoppingCart } from "use-shopping-cart";

export default function Product() {
  const { cartDetails } = useShoppingCart();
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery(["Product", productId], () =>
    axios(`/api/products/${productId}`).then((res) => res.data.product)
  );

  console.log(product, productId)

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <div className="text-red-500 font-bold text-center mx-auto">
        Oops!! {error.message}
      </div>
    );

  const price = formatProductPrice(product);

  const currentProduct = Object.keys(cartDetails)
    .map((key) => cartDetails[key])
    .filter((cart) => cart.id === product.id);

  return (
    <section className="home-page text-gray-400 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-8">
              {product.title}
            </h1>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-600 mb-5"></div>
            <div className="flex flex-wrap">
              <span className="title-font font-medium text-2xl text-white pr-6 mb-4">
                {price}
              </span>
              <div className="flex flex-nowrap mb-4">
                <AddToCart product={product} currentProduct={currentProduct} />
                <RemoveFromCart
                  product={product}
                  currentProduct={currentProduct}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
