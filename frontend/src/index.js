import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

import Body from "./components/Body";
import ViewDetail from "./components/ViewDetail";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/jobs",
        element: <Body />,
      },
      {
        path: "/detail/:id",
        element: <ViewDetail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
