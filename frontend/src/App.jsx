import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/LoginRegister/Login";
import Layout from "./components/Layout";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
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
            <Route path="" element={<Products />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
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