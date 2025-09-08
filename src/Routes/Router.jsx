import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";
import CreateJob from "../Pages/CreateJob/CreateJob";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoutes>
            <JobDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:7000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoutes>
            <JobApply />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRoutes>
            <MyApplication />
          </PrivateRoutes>
        ),
      },
      {
        path: "/createJob",
        element: (
          <PrivateRoutes>
            <CreateJob />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
