import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="flex h-48 p-6">
      <div className="w-auto">
        <Link
          to="/"
          className="flex flex-col title-font items-start text-white m-12 md:mb-0"
        >
          <span className="flex items-center justify-center ml-3">
            <LogoIcon />
          </span>
          <h2 className="mt-6 pl-5 text-lg">Primart Inc. Pvt. limited</h2>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
