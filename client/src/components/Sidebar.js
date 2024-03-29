import React from "react";
import {
  HelpIcon,
  InfoIcon,
  LogInIcon,
  Notifications,
  OrdersIcon,
  ShoppingBag,
  SignUpIcon,
  UpgradePro,
  UserIcon,
} from "./Icons";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <Modal
      isOpen={isSidebarOpen}
      onRequestClose={toggleSidebar}
      contentLabel="Cart Modal"
      closeTimeoutMS={500}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      portalClassName="ReactModalPortal"
    >
      <aside className="sidebar w-64 h-5/6 mt-8 rounded" aria-label="Sidebar">
        <div className="h-full overflow-y-auto py-4 px-3 rounded">
          <ul className="space-y-2">
            <button className="w-full" onClick={toggleSidebar}>
              <Link
                to="/OrderTracking"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <OrdersIcon />
                <span className="ml-3">Your Orders</span>
              </Link>
            </button>
            <button className="w-full" onClick={toggleSidebar}>
              <Link
                to="/Account"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <UserIcon />
                <span className="ml-3">
                  Your Profile
                </span>
              </Link>
            </button>
            <button className="w-full" onClick={toggleSidebar}>
              <Link
                to="/Notifications"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <Notifications />
                <span className="ml-3">
                  Notifications
                </span>
              </Link>
            </button>
            <button className="w-full" onClick={toggleSidebar}>
              <Link
                to="/"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <ShoppingBag />
                <span className="ml-3">Products</span>
              </Link>
            </button>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-600 dark:border-gray-700">
            <button className="w-full" onClick={toggleSidebar}>
              <Link
                to="/premium"
                className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75   hover:bg-gray-800 group"
              >
                <UpgradePro />
                <span className="ml-4">Upgrade to Pro</span>
              </Link>
            </button>
            <button className="w-full" onClick={toggleSidebar}>
              <Link
                to="/AboutUs"
                className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75   hover:bg-gray-800 group"
              >
                <InfoIcon />
                <span className="ml-3">About Us</span>
              </Link>
            </button>
            <button className="w-full" onClick={toggleSidebar}>
              <Link
                to="/support/help"
                className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75   hover:bg-gray-800 group"
              >
                <HelpIcon />
                <span className="ml-3">Help</span>
              </Link>
            </button>
            <button className="w-full" onClick={toggleSidebar}>
              <Link
                to="/login"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <LogInIcon />
                <span className="ml-3">Log In</span>
              </Link>
            </button>
            <button className="w-full" onClick={toggleSidebar}>
              <Link
                to="/signup"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <SignUpIcon />
                <span className="ml-3">Sign Up</span>
              </Link>
            </button>
          </ul>
        </div>
      </aside>
    </Modal>
  );
};

export default Sidebar;
