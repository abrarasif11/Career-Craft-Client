import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:'/signin',
        element: <SignIn/>
      }
    ],
  },
]);

export default router;
