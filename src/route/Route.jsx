import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import AllAdventure from "../pages/AllAdventure";
import AdvantureCard from "../Components/AdvantureCard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:'adventure',
        element: <AllAdventure></AllAdventure>
      },
      {
        path: "AdvantureCard",
        element:<AdvantureCard></AdvantureCard>,
        loader: fetch()
      }
    ]
  },

]);

const Route = () => {
  return <RouterProvider router={router} />
};

export default Route;
