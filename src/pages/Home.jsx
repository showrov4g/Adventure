import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import AllAdventure from "./AllAdventure";
import GallerySection from "../Components/GallerySection";
import NewsLetter from "../Components/NewsLetter";
import "animate.css";

const Home = () => {
  useEffect(()=>{
    document.title = "Eco | Home"
  },[])
  return (
    <div>
      <div className="animate__animated animate__zoomIn">
        <Banner></Banner>
      </div>
      <div className="animate__animated animate__flipInX">
        <AllAdventure></AllAdventure>
      </div>
      <GallerySection></GallerySection>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
