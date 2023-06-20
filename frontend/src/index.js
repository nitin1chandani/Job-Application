import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterEmployer from "./components/RegisterEmployer";
import Body from "./components/Body";
import ViewDetail from "./components/ViewDetail";
import Banner from "./components/Banner";
import LoginEmployer from "./components/LoginEmployer";
import Post from "./components/Post";
import Dashboard from "./components/dashboard";
import Apply from "./components/Apply";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
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
      {
        path: "/recruit/register",
        element: <RegisterEmployer />,
      },
      {
        path: "/recruit/login",
        element: <LoginEmployer />,
      },
      {
        path: "/recruit/post",
        element: <Post />,
      },
      {
        path: "/apply",
        element: <Apply />,
      },
      {
        path: "/recruit/dashboard",
        element: <Dashboard />,
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
