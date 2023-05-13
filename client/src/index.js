import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "use-shopping-cart";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <CartProvider
      mode="payment"
      cartMode="checkout-session"
      stripe={process.env.REACT_APP_STRIPE_KEY}
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
      // successUrl="stripe.com"
      // cancelUrl="twitter.com/dayhaysoos"
    >
      <App />
    </CartProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
