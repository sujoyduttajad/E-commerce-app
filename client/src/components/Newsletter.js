import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full flex items-center justify-center bg-gray-800 h-auto">
      <div>
        <div className="flex flex-col">
          <h2 className="tracking-wider text-xs title-font font-medium text-gray-500 mb-1 mt-2 text-lg">
            Newsletter
          </h2>
          <p>Subscribe here to get every single updates</p>
        </div>
      </div>
      <form>
        <input />
        <button>Subscribe Now</button>
      </form>
    </section>
  );
};

export default Newsletter;
