import React, { useEffect, useState } from "react";
import SingleAdvinterCard from "./SingleAdvinterCard";

const AdvantureCard = () => {
  const [adventures, setAdventure] = useState([]);
  useEffect(() => {
    fetch("adventure.json").then((res) => {
      res
        .json()
        .then((data) => setAdventure(data))
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <div className="my-10">
      <div></div>
      <div className="grid grid-cols-3 gap-16 mx-auto">
        {adventures.map((adventure) => (
          <SingleAdvinterCard adventure={adventure}></SingleAdvinterCard>
        ))}
      </div>
    </div>
  );
};

export default AdvantureCard;
