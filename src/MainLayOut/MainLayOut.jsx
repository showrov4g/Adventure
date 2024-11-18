import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainLayOut = () => {
  return <div className="w-11/12 mx-auto">
    <NavBar></NavBar>
    <Outlet></Outlet>
  </div>;
};

export default MainLayOut;
