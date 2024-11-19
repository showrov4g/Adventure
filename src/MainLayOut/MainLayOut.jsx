import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import AdvantureCard from "../Components/AdvantureCard";
import Banner from "../Components/Banner";

const MainLayOut = () => {
  return <div className="w-11/12 mx-auto">
    <NavBar></NavBar>
    <Banner></Banner>
    <Outlet></Outlet>
  </div>;
};

export default MainLayOut;
