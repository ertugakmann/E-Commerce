import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../components/ProductList";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
}

export default RouterConfig;
