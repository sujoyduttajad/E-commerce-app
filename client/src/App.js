import React from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Product from "./pages/Product";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <CartProvider
        cartMode="checkout-session"
        stripe={process.env.REACT_APP_STRIPE}
        currency="USD"
      >
        <Navbar />
        <QueryClientProvider client={queryClient}>
          <Toaster position="bottom-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/result" component={Result} />
            <Route path="/:productId" component={Product} />
          </Switch>
        </QueryClientProvider>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
