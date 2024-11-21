import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import AllAdventure from "../pages/AllAdventure";
import AdvantureCard from "../Components/AdvantureCard";
import AdventureDetails from "../pages/AdventureDetails";
import AuthLayout from "../MainLayOut/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../pages/ResetPassword";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "AllAdventure",
        element: <AllAdventure></AllAdventure>,
      },
      {
        path: "/AdventureDetails/:ID",
        element: (
          <PrivateRoute>
            <AdventureDetails></AdventureDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/adventure.json");
          const data = await res.json();
          const singleData = data.find((d) => d.ID === params.ID);
          return singleData;
        },
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/resetpassword",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
