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
    >
      <aside className="w-64 h-full mt-8" aria-label="Sidebar">
        <div className="h-full overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <OrdersIcon />
                <span className="ml-3">Your Orders</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <UserIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Your Profile
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Notifications />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Notifications
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ShoppingBag />
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <UpgradePro />
                <span className="ml-4">Upgrade to Pro</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <InfoIcon />
                <span className="ml-3">About Us</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <HelpIcon />
                <span className="ml-3">Help</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <LogInIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Log In</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <SignUpIcon />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </Modal>
  );
};

export default Sidebar;
