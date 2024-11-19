import React from 'react';
import NavBar from '../Components/NavBar';
import { useLoaderData } from 'react-router-dom';

const AdventureDetails = () => {
    const {AdventureTitle, Image,CategoryName,ShortDescription,AdventureCost, Location,Duration, AdventureLevel, IncludedItems,EcoFriendlyFeatures,MaxGroupSize, SpecialInstructions} = useLoaderData()
    return (
        <div className='w-11/12 mx-auto'>
            <NavBar></NavBar>
            <div className='w-3/6 mx-auto'>
                <div className=''>
                    <img src={Image} alt="" className='w-full' />
                </div>
                <div>
                    <h1>Title: {AdventureTitle}</h1>
                    <h1>Category Name: {CategoryName}</h1>
                    <p>Short Description: {ShortDescription}</p>
                    <p>AdventureCost ${AdventureCost}</p>
                    <p>Location: {Location}</p>
                    <p>Duration: {Duration}</p>
                    <p>AdventureLevel: {AdventureLevel}</p>
                    <p>IncludedItems: {IncludedItems.map(item =><><h6>{item}</h6></>)}</p>
                    <p>Eco-Friendly Features: {EcoFriendlyFeatures.map(item =><><h6>{item}</h6></>)}</p>
                    <p>Max Group Size:{MaxGroupSize}</p>
                    <p>Special Instructions: {SpecialInstructions.map(item =><><h6>{item}</h6></>)}</p>
                </div>
            </div>
        </div>
    );
};

export default AdventureDetails;