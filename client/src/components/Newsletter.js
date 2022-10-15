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
      <form>
        <div className="relative mb-6">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <Envelope />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
        </div>
        <button>Subscribe Now</button>
      </form>
    </section>
  );
};

export default Newsletter;
