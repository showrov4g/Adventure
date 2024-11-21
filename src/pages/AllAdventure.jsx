import { useEffect } from "react";
import AdvantureCard from "../Components/AdvantureCard";

const AllAdventure = () => {
  useEffect(()=>{
    document.title= "Eco | AdventureDetails"
  },[])
  return (
    <div>
      <div className="w-11/12 mx-auto my-10">
        <h1 className="text-center text-4xl font-bold">All Adventure</h1>
        <AdvantureCard></AdvantureCard>
      </div>
    </div>
  );
};

export default AllAdventure;
