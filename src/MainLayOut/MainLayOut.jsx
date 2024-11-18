import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import AdvantureCard from "../Components/AdvantureCard";

const MainLayOut = () => {
  return <div className="w-11/12 mx-auto">
    <NavBar></NavBar>
    <Outlet></Outlet>
    <AdvantureCard></AdvantureCard>
  </div>;
};

export default MainLayOut;
