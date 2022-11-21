import ProductList from "../components/ProductList";
import React from "react";
import Newsletter from "components/Newsletter";

export default function Home() {
  return (
    <section className="home-page text-gray-400 bg-gray-900 body-font select-none">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <ProductList />
        </div>
      </div>
      <Newsletter />
    </section>
  );
}
