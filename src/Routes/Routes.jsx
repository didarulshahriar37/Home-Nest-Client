import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import Error from "../pages/Error";
import Loading from "../components/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
            loader: () => fetch("http://localhost:3000/featured-properties"),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: "/all-properties",
        },
        {
          path: "/add-properties",
        },
        {
          path: "/my-properties",
        },
        {
          path: "/my-ratings",
        }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
        {
            path: "/auth/sign-in",
            Component: SignIn
        },
        {
            path: "/auth/sign-up",
            Component: Signup
        }
    ]
  },
  {
    path: "/*",
    Component: Error
  }
]);

export default router;