import React from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Product from "./pages/Product";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";
import Navbar from "components/Navbar";

const queryClient = new QueryClient();
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CartProvider
        mode="checkout-session"
        stripe={stripePromise}
        currency="USD"
      >
        <QueryClientProvider client={queryClient}>
          <Toaster position="bottom-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/result" component={Result} />
            <Route path="/:productId" component={Product} />
          </Switch>
        </QueryClientProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
