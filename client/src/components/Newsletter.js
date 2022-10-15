import React from "react";
import { Envelope } from "./Icons";

const Newsletter = () => {
  return (
    <section className="w-full flex items-center justify-center bg-gray-800 h-36">
      <div>
        <div className="flex flex-col p-4">
          <h2 className="tracking-wider text-xs title-font font-medium text-white mb-1 mt-2 text-4xl">
            Newsletter
          </h2>
          <p className="font-light text-sm">
            Subscribe here to get every single updates
          </p>
        </div>
      </div>

      <div className="relative w-auto flex">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <Envelope />
        </div>
        <form>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
            rounded focus:ring-blue-500 focus:outline-blue-500 block w-full pl-10 p-2.5"
            placeholder="johndoe@gmail.com"
          />
          <button
            className="flex absolute items-center bg-blue-900 border-0 py-1 px-3 
                focus:outline-none hover:bg-blue-800 rounded text-white md:mt-0"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
