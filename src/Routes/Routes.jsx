import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        }
    ]
  },
]);

export default router;