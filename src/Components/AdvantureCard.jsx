import React, { useEffect, useState } from "react";
import SingleAdvinterCard from "./SingleAdvinterCard";
import { toast } from "react-toastify";

const AdvantureCard = () => {
  const [adventures, setAdventure] = useState([]);
  useEffect(() => {
    fetch("adventure.json").then((res) => {
      res
        .json()
        .then((data) => setAdventure(data))
        .catch((err) => {toast.error(err)});
    });
  }, []);

  return (
    <div className="my-10">
      <div></div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto animate__animated animate__fadeInRight">
        {adventures.map((adventure) => (
          <SingleAdvinterCard adventure={adventure}></SingleAdvinterCard>
        ))}
      </div>
    </div>
  );
};

export default AdvantureCard;
