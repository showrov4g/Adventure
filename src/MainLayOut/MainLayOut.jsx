import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import AdvantureCard from "../Components/AdvantureCard";
import Banner from "../Components/Banner";
import GallerySection from "../Components/GallerySection";
import NewsLetter from "../Components/NewsLetter";

const MainLayOut = () => {
  return <div className="w-11/12 mx-auto">
    <NavBar></NavBar>
    <Banner></Banner>
    <Outlet></Outlet>
    <GallerySection></GallerySection>
    <NewsLetter></NewsLetter>
  </div>;
};

export default MainLayOut;
