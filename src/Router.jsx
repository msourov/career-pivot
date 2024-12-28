import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import { Loader } from "@mantine/core";
import ErrorPage from "./pages/Authentication/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";

const loader = (
  <div className="flex justify-center items-center">
    <Loader type="dots" />
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={loader}>
        <AppLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={loader}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={loader}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        element: (
          <Suspense fallback={loader}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={loader}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);
