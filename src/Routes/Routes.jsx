import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
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
  }
]);

export default router;