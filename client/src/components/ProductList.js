import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import LoadingSpinner from "./LoadingSpinner";
import formatProductPrice from "../utils/formatProductPrice";

export default function ProductList() {
  
  const { data: products, isLoading } = useQuery(["Products"], () =>
    axios("/api/products").then((res) => res.data.products)
  );

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}

function ProductItem({ product }) {
  const price = formatProductPrice(product);

  return (
    <div className=" p-4 md:w-1/3 lg:w-1/4 user-select-none">
      <div className="product-card h-full rounded-lg overflow-hidden">
        <Link to={`/${product.id}`}>
          <img
            className="lg:h-80 md:h-36 w-full object-cover object-center"
            src={product.thumbnail}
            alt={product.title}
          />
        </Link>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {product.category}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {product.title}
          </h1>
          {/* <p className="leading-relaxed mb-3">{product.description}</p> */}
          <div className="flex items-center flex-wrap ">
            <Link
              to={`/${product.id}`}
              className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
            >
              See More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-lg pr-3 py-1 border-gray-800 font-bold">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
