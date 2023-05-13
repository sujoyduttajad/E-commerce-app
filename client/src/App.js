import React from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Product from "./pages/Product";
import { QueryClientProvider, QueryClient } from "react-query";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Toaster position="bottom-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/:productId" element={<Product />} />
        </Routes>
      </QueryClientProvider>
      <Footer />
    </React.Fragment>
  );
}

export default App;
