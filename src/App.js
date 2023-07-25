import React from 'react';
import { Counter } from './features/counter/Counter';
import ProductList from './features/product-list/ProductList.js';
import Home from './pages/Home';
import './App.css';
import LoginPage from './pages/LoginPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Singup from './features/auth/components/Signup';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "/login",
    element: (<LoginPage></LoginPage>),
  },
  {
    path: "/signup",
    element: (<Singup></Singup>),
  },
  {   //  only for testing - then page will be added
    path: "/cart",
    element: (<CartPage></CartPage>),
  },
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
