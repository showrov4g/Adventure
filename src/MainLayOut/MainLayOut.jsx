import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import AdvantureCard from "../Components/AdvantureCard";
import Banner from "../Components/Banner";
import GallerySection from "../Components/GallerySection";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const MainLayOut = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="w-11/12 mx-auto min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
