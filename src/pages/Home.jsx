import React from 'react';
import Banner from '../Components/Banner';
import AllAdventure from './AllAdventure';
import GallerySection from '../Components/GallerySection';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllAdventure></AllAdventure>
            <GallerySection></GallerySection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;