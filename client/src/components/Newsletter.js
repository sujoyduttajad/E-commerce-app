import React from "react";
import { Envelope } from "./Icons";

const Newsletter = () => {
  return (
    <section className="w-full flex flex-wrap items-center justify-center bg-gray-800 h-36">
      <div className="flex p-3" >
        <div className="flex flex-col p-4 mr-5">
          <h2 className="tracking-wider text-xs title-font font-medium text-white mb-1 mt-2 text-4xl">
            Newsletter
          </h2>
          <p className="font-light text-sm">
            Subscribe here to get every single updates
          </p>
        </div>
      </div>
      <div className="relative">
        <form className="w-96">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3">
            <Envelope />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-loose 
            rounded focus:ring-blue-500 focus:outline-blue-500 min-w-96 w-full pl-10 p-2.5 pr-"
            placeholder="johndoe@gmail.com"
          />
          <button
            className="flex absolute right-1.5 bottom-1.5 items-center bg-blue-900 border-0 px-3 
                focus:outline-none hover:bg-blue-800 rounded text-white md:mt-0 
                focus:ring-4 focus:ring-blue-300 font-medium text-md px-4 py-2"
          >
            Subscribe Now
          </button>
        </form>
        {/* 
        <form>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Envelope />
            </div>
            <input
              type="search"
              id="search"
              placeholder="johndoe@gmail.com"
              required
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
              border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Subscribe Now
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
};

export default Newsletter;
