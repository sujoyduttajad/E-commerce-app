import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between h-60 p-10">
      <div className="w-auto flex flex-col items-start pl-2">
        <Link to="/" className="title-font text-white md:mb-0">
          <span className="flex items-start justify-start">
            <LogoIcon paramWidth={180} paramHeight={36} />
          </span>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 mt-6 text-lg">
            Primart Pvt. Limited
          </h2>
        </Link>
      </div>
      <div className="w-auto flex items-start justify-between">
        <ul className="list-none flex flex-col justify-evenly font-normal text-gray-400 px-4">
            <p className="font-medium text-gray-300 tracking-wider pb-3" >Our Brand</p>
          <li>
            <Link
              to="/AboutUs"
              className="title-font hover:text-gray-300 hover:underline md:mb-0"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/Account"
              className="title-font hover:text-gray-300 hover:underline md:mb-0"
            >
              My Account
            </Link>
          </li>
          <li>
            <Link
              to="/Blog"
              className="title-font hover:text-gray-300 hover:underline md:mb-0"
            >
              Primart Blog
            </Link>
          </li>
        </ul>
        <ul className="list-none flex flex-col justify-evenly font-normal text-gray-400 px-4">
        <p className="font-medium text-gray-300 tracking-wider pb-3" >Products</p>
          <li>
            <Link
              to="/OrderTracking"
              className="title-font hover:text-gray-300 hover:underline md:mb-0"
            >
              Order Tracking
            </Link>
          </li>
          <li>
            <Link
              to="/Refunds"
              className="title-font hover:text-gray-300 hover:underline md:mb-0"
            >
              Refund Policy
            </Link>
          </li>
          <li>
            <Link
              to="/Shipping"
              className="title-font hover:text-gray-300 hover:underline md:mb-0"
            >
              Shipping Policy
            </Link>
          </li>
        </ul>
        <ul className="list-none flex flex-col justify-evenly font-normal text-gray-400 px-4">
        <p className="font-medium text-gray-300 tracking-wider pb-3" >Media</p>
          <li>
            <Link
              to="/Support"
              className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0"
            >
              Help & Support
            </Link>
          </li>
          <li>
            <Link
              to="/Privacy"
              className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/TermsConditions"
              className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0"
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-auto flex flex-col items-start justify-between pr-4">
        <h3 className="font-semibold text-2xl text-gray-400 subpixel-antialiased pb-3 tracking-wide">
          Contact Us
        </h3>
        <p className="font-normal text-gray-400 text-sm">
          Got Questions? Call us 24/7
        </p>
        <p className="font-normal text-gray-400 text-xl pb-2 font-mono">
          (0600) 874 548
        </p>
        <p className="font-normal text-gray-300 text-base">
          Email -{" "}
          <span className="font-light text-gray-400 text-base">
            <a href="mailto:sujoyduttajad@gmail.com">support@primart.com</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
