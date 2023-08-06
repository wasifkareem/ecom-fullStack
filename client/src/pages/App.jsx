import React from "react";
import Home from "./Home";
import ProductList from "./ProductList";
import Product from "./Product";
import Register from "./Register";
import Login from "./Login";
import Cart from "./Cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category*" element={<ProductList />} />
        <Route path="/product/:id*" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login*"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register*"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
