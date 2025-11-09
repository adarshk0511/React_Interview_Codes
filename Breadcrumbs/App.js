import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductDetails from "./pages/product-details";
import ProductListing from "./pages/product-listing";
import "./styles.css";
import Breadcrumbs from "./components/breadcrumbs";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
