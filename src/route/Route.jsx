import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import AllAdventure from "../pages/AllAdventure";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:'/adventure',
        element: <AllAdventure></AllAdventure>
      }
    ]
  },

]);

const Route = () => {
  return <RouterProvider router={router} />
};

export default Route;
