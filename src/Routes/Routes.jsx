import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import Error from "../pages/Error";
import Loading from "../components/Loading/Loading";
import AllProperties from "../pages/AllProperties";
import AddProperties from "../pages/AddProperties";
import MyProperties from "../pages/MyProperties";
import MyRatings from "../pages/MyRatings";
import PrivateRoute from "../provider/PrivateRoute";
import PropertyDetails from "../pages/PropertyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
            loader: () => fetch("https://home-nest-server-green.vercel.app/featured-properties").then(res=>res.json()),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: "/all-properties",
          Component: AllProperties,
          loader: () => fetch("https://home-nest-server-green.vercel.app/all-properties").then(res=>res.json()),
          hydrateFallbackElement: <Loading></Loading>
        },
        {
          path: "/add-properties",
          loader: () => fetch("https://home-nest-server-green.vercel.app/all-properties").then(res=>res.json()),
          hydrateFallbackElement: <Loading></Loading>,
          element: <PrivateRoute><AddProperties></AddProperties></PrivateRoute>
        },
        {
          path: "/my-properties",
          element: <PrivateRoute><MyProperties></MyProperties></PrivateRoute>
        },
        {
          path: "/my-ratings",
          element: <PrivateRoute><MyRatings></MyRatings></PrivateRoute>
        },
        {
          path: "/property-details/:id",
          loader: () => fetch("https://home-nest-server-green.vercel.app/all-properties").then(res=>res.json()),
          hydrateFallbackElement: <Loading></Loading>,
          element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>
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