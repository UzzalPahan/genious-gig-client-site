import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root/Root";
import AddJob from "../AddJob/AddJob";
import MyPostedJob from "../MyPostedJob/MyPostedJob";
import UpdatePostedJob from "../UpdatePostedJob/UpdatePostedJob";
import ErrorPage from "../Error/ErrorPage";
import MyBids from "../MyBids/MyBids";
import BidRequest from "../BidRequest/BidRequest";
import PrivateRoutes from "./PrivateRoute";
import JobDetail from "../JobDetail/JobDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Root></Root>,
        loader: () => fetch("https://genious-gig-backend.vercel.app/job"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addjob",
        element: (
          <PrivateRoutes>
            <AddJob></AddJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/:category",
        element: <Root></Root>,
        loader: ({ params }) =>fetch(`https://genious-gig-backend.vercel.app/${params.category}`,),
      },
      {
        path: "/mypostedjob",
        element: (
          <PrivateRoutes>
            <MyPostedJob></MyPostedJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updatepostedjob/:id",
        element: <UpdatePostedJob></UpdatePostedJob>,
        loader: ({ params }) =>
          fetch(`https://genious-gig-backend.vercel.app/updatepostedjob/${params.id}`),
      },
      {
        path: "/mybids",
        element: (
          <PrivateRoutes>
            <MyBids></MyBids>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bidrequest",
        element: (
          <PrivateRoutes>
            <BidRequest></BidRequest>
          </PrivateRoutes>
        ),
        loader: () => fetch('https://genious-gig-backend.vercel.app/bidrequest')
      },
      {
        path: "/jobdetail/:id",
        element: (
          <PrivateRoutes>
            <JobDetail></JobDetail>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://genious-gig-backend.vercel.app/jobdetail/${params.id}`),
      }
    ],
  },
]);

export default routes;
