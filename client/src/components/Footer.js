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
      <div className="flex flex-wrap items-center justify-evenly pb-20 h-auto">
        {/* Brand Section */}
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
        {/* Hyperlinks/Resource section */}
        <div className="w-auto flex items-start flex-wrap justify-between">
          <ul className="list-none flex flex-col justify-evenly font-normal text-gray-400 px-4">
            <p className="font-medium text-gray-300 tracking-wider py-3">
              Our Brand
            </p>
            <li className="leading-6 pb-1">
              <Link
                to="/AboutUs"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                About Us
              </Link>
            </li>
            <li className="leading-6 pb-1">
              <Link
                to="/Account"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                My Account
              </Link>
            </li>
            <li className="leading-6 pb-1">
              <Link
                to="/Blog"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                Primart Blog
              </Link>
            </li>
            <li className="leading-6 pb-1">
              <Link
                to="/Seller"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                Seller
              </Link>
            </li>
          </ul>
          <ul className="list-none flex flex-col justify-evenly font-normal text-gray-400 px-4">
            <p className="font-medium text-gray-300 tracking-wider py-3 ">
              Media
            </p>
            <li className="leading-6 pb-1">
              <Link
                to="https://facebook.com/home"
                className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0 leading-5"
              >
                Facebook
              </Link>
            </li>
            <li className="leading-6 pb-1">
              <Link
                to="https://www.instagram.com/"
                className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0 leading-5"
              >
                Instagram
              </Link>
            </li>
            <li className="leading-6 pb-1">
              <Link
                to="https://twitter.com/home"
                className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0 leading-5"
              >
                Twitter
              </Link>
            </li>
            <li className="leading-6 pb-1">
              <Link
                to="https://in.pinterest.com/"
                className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0 leading-5"
              >
                Pinterest
              </Link>
            </li>
          </ul>
          <ul className="list-none flex flex-col justify-evenly font-normal text-gray-400 px-4">
            <p className="font-medium text-gray-300 tracking-wider py-3">
              Products
            </p>
            <li className="leading-6 pb-1">
              <Link
                to="/OrderTracking"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                Order Tracking
              </Link>
            </li>
            <li className="leading-6 pb-1">
              <Link
                to="/Refunds"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                Refund Policy
              </Link>
            </li>
            <li className="leading-6 pb-1">
              <Link
                to="/Shipping"
                className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
              >
                Shipping Policy
              </Link>
            </li>
          </ul>
          <ul className="list-none flex flex-col justify-evenly font-normal text-gray-400 px-4">
            <p className="font-medium text-gray-300 tracking-wider py-3">
              Support
            </p>
            <li className="leading-6 pb-1">
              <Link
                to="/Support"
                className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0 leading-5"
              >
                Help & Support
              </Link>
            </li>
            <li className="leading-6 pb-1">
              <Link
                to="/Privacy"
                className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0 leading-5"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="leading-6 pb-1">
              <Link
                to="/TermsConditions"
                className="title-font hover:text-gray-300 hover:underline py-4 md:mb-0 leading-5"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact section */}
        <div className="w-auto h-auto flex flex-col items-start lg:justify-between pr-4 justify-start">
          <h3 className="font-semibold text-2xl text-gray-300 subpixel-antialiased pb-5 tracking-wide">
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
      {/* Divider */}
      <hr className="w-9/12 m-auto border-1 border-gray-700" />
      {/* Copyright section */}
      <div className="flex items-start w-auto justify-around p-8 pb-2 h-auto">
        <p className="font-normal text-gray-400 text-sm">
          Copyright© {currYear()}. All rights reserved.
        </p>
        <p className="font-normal text-gray-400 text-sm">
          Made with 💗 by{" "}
          <a
            href="https://github.com/sujoyduttajad/E-commerce-app"
            target="blank"
            className="title-font hover:text-gray-300 hover:underline md:mb-0 leading-5"
          >
            Sujoy Dutta
          </a>
        </p>
      </div>
      {/* Disclaimer */}
      <div className="flex items-center justify-evenly py-6 pb-8 h-auto">
        <p className="font-normal text-center text-gray-500 text-sm">
          By using this website, you understand the information being presented
          is provided for informational purposes only
        </p>
      </div>
    </footer>
  );
};

export default Footer;
