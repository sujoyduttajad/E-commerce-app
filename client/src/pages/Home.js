import ProductList from "../components/ProductList";
import React from "react";

export default function Home() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            EssenCart
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <ProductList />
        </div>
      </div>
    </section>
  );
}
