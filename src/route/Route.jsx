import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import AllAdventure from "../pages/AllAdventure";
import AdvantureCard from "../Components/AdvantureCard";
import AdventureDetails from "../pages/AdventureDetails";
import AuthLayout from "../MainLayOut/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <AdvantureCard></AdvantureCard>,
      },
    ],
  },
  {
    path: "AllAdventure",
    element: <AllAdventure></AllAdventure>,
  },
  {
    path: "/AdventureDetails/:ID",
    element: <AdventureDetails></AdventureDetails>,
    loader: async ({ params }) => {
      const res = await fetch("/adventure.json");
      const data = await res.json();
      const singleData = data.find((d) => d.ID === params.ID);
      return singleData;
    }
  },
    {
      path:"/auth",
      element: <AuthLayout></AuthLayout>,
      children:[
        {
          path:"/auth/login",
          element: <Login></Login>
        },
        {
          path:"/auth/register",
          element: <Register></Register>
        }
      ]
    }
    
]);

const Route = () => {
  return <RouterProvider router={router} />;
};

export default Route;
