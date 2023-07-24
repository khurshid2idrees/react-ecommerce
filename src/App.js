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
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
