import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between h-60 p-10">
      <div className="w-auto flex flex-col items-start pl-2">
        <Link to="/" className="title-font text-white md:mb-0">
          <span className="flex items-start justify-center">
            <LogoIcon />
          </span>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 mt-6 pl-3 text-lg">
            Primart Inc. Pvt. Limited
          </h2>
        </Link>
      </div>
      <div className="w-auto flex items-start justify-between">
        <ul className="list-none flex flex-col font-normal text-gray-400 px-4">
          <li>About Us</li>
          <li>My Account</li>
          <li>Primart Blog</li>
        </ul>
        <ul className="list-none flex flex-col font-normal text-gray-400 px-4">
          <li>Order Tracking</li>
          <li>Refund Policy</li>
          <li>Shipping Policy</li>
        </ul>
        <ul className="list-none flex flex-col font-normal text-gray-400 px-4">
          <li>Help & Support</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="w-auto flex items-start justify-between">
        <h3 className="font-semibold text-2xl text-gray-400 antialiased">
          Contact Us
        </h3>
        <p className="font-normal text-gray-400 text-sm">
          Got Questions? Call us 24/7
        </p>
        <p className="font-normal text-gray-400 text-xl">(0600) 874 548</p>
        <p className="font-medium text-gray-300 text-base">
          Email -{" "}
          <span className="font-light text-gray-400 text-base">
            support@primart.com
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
