import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import User from "./components/User/User";
import Errorpage from "./components/Errors/Errorpage";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "",
        element: <Products />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "User",
        element: <User />,
      },
    ],
  },
  {
    path:"login",
    element: <Login />,
  },
  {
    path:"register",
    element: <Register />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);