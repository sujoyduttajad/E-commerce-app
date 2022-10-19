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
            <li>
            <Link
                to="/OrderTracking"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <OrdersIcon />
                <span className="ml-3">Your Orders</span>
              </Link>
            </li>
            <li>
              <Link
                 to="/Account"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <UserIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Your Profile
                </span>
              </Link>
            </li>
            <li>
              <Link
                 to="#"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <Notifications />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Notifications
                </span>
              </Link>
            </li>
            <li>
              <Link
                 to="#"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <ShoppingBag />
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </Link>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-600 dark:border-gray-700">
            <li>
              <Link
                 to="/premium"
                className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75   hover:bg-gray-800 group"
              >
                <UpgradePro />
                <span className="ml-4">Upgrade to Pro</span>
              </Link>
            </li>
            <li>
              <Link
                 to="/AboutUs"
                className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75   hover:bg-gray-800 group"
              >
                <InfoIcon />
                <span className="ml-3">About Us</span>
              </Link>
            </li>
            <li>
              <Link
                 to="/support/help"
                className="flex items-center p-2 text-base font-normal rounded-lg transition duration-75   hover:bg-gray-800 group"
              >
                <HelpIcon />
                <span className="ml-3">Help</span>
              </Link>
            </li>
            <li>
              <Link
                 to="/login"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <LogInIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Log In</span>
              </Link>
            </li>
            <li>
              <Link
                 to="/signup"
                className="flex items-center p-2 text-base font-normal rounded-lg   hover:bg-gray-800"
              >
                <SignUpIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </Modal>
  );
};

export default Sidebar;
