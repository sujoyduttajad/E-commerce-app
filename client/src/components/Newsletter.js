import React from "react";
import useWindowDimensions from "utils/useDimension";
import { Envelope, MailIcon } from "./Icons";

const Newsletter = () => {
  const { width } = useWindowDimensions();
  return (
    <article className="w-full flex flex-wrap items-center justify-center h-48 pb-60 lg:pb-2">
      <div className="flex p-3 items-center ">
        <MailIcon 
          paramWidth={`${width < 450 ? '35' : ''}`} 
          paramHeight={`${width < 450 ? '35' : ''}`} 
        />
        <div className="flex flex-col p-4 mr-5">
          <h2 className="yellow-shade tracking-wider text-xs title-font font-medium text-white text-4xl">
            Newsletter
          </h2>
          <p className="font-base text-sm">
            Subscribe here to get every single updates
          </p>
        </div>
      </div>
      <div className="relative ">
        <form className="w-96 focus:outline-blue-500">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3">
            <Envelope />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-loose 
            rounded focus:outline-none focus:ring focus:border-blue-300 min-w-80 w-full pl-10 p-2.5 pr-"
            placeholder="johndoe@gmail.com"
          />
          <button
            className="flex absolute right-1.5 bottom-1.5 items-center bg-blue-900 border-0 px-3 
                focus:outline-none hover:bg-blue-800 rounded text-white md:mt-0  
                 focus:ring-blue-300 font-medium text-md px-4 py-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </article>
  );
};

export default Newsletter;
