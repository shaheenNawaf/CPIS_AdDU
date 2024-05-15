import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/LoginRegister/Login";
import Layout from "./components/Layout";
import Products from "./components/Products/Products";
import Products_edit from "./components/Products/Products_edit";
import Products_add from "./components/Products/Products_add";
import Cart from "./components/Cart/Cart";
import Cart_add from "./components/Cart/Cart_add";
import Cart_add_out from "./components/Cart/Cart_add_out";
import Register from "./components/LoginRegister/Register";
import User from "./components/User/User";
import Errorpage from "./components/Errors/Errorpage";

function Logout() {
    localStorage.clear()
    return <Navigate to="/login" />
  }
  
  function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
  }
  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
            
        }>
            <Route path="products" element={<Products />} />
            <Route path="products/edit" element={<Products_edit />} />
            <Route path="products/add" element={<Products_add />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cart/stockin" element={<Cart_add />} />
            <Route path="cart/stockout" element={<Cart_add_out />} />
            <Route path="user" element={<User />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;