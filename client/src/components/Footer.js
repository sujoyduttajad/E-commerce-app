import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon, Tagline } from "./Icons";

const currYear = () => {
  const _year = new Date().getFullYear();
  return _year;
};

const Footer = () => {
  return (
    <footer className="flex flex-col h-auto p-10">
      <div className="flex items-center justify-evenly h-48">
        <div className="w-auto flex flex-col items-start pl-2">
          <Link to="/" className="title-font text-white md:mb-0">
            <span className="flex flex-col items-start justify-start">
              <LogoIcon paramWidth={230} paramHeight={50} />
              <Tagline paramWidth={280} paramHeight={50} />
            </span>
            <h2 className="tracking-wider text-xs title-font font-medium text-gray-500 mb-1 mt-2 text-lg">
              Primart® Pvt. Limited
            </h2>
          </Link>
        </div>
        <div className="w-auto flex items-start flex-wrap justify-between">
          <ul className="list-none flex flex-col justify-evenly font-normal text-gray-400 px-4">
            <p className="font-medium text-gray-300 tracking-wider pb-3">
              Our Brand
            </p>
            <li>
              <Link
                to="/AboutUs"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Account"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                to="/Blog"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                Primart Blog
              </Link>
            </li>
          </ul>
          <ul className="list-none flex flex-col justify-evenly font-normal text-gray-400 px-4">
            <p className="font-medium text-gray-300 tracking-wider pb-3">
              Products
            </p>
            <li>
              <Link
                to="/OrderTracking"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                Order Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/Refunds"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                to="/Shipping"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                Shipping Policy
              </Link>
            </li>
          </ul>
          <ul className="list-none flex flex-col justify-evenly font-normal text-gray-400 px-4">
            <p className="font-medium text-gray-300 tracking-wider pb-3">
              Media
            </p>
            <li>
              <Link
                to="/Support"
                className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0 leading-5"
              >
                Help & Support
              </Link>
            </li>
            <li>
              <Link
                to="/Privacy"
                className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0 leading-5"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/TermsConditions"
                className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0 leading-5"
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
      </div>
      <hr className="w-9/12 m-auto border-1 border-gray-500" />
      <div className="flex items-center justify-evenly h-48">
        <p className="font-normal text-gray-400 text-sm">
          Copyright© {currYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
