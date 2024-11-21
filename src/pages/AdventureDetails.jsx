import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";

const AdventureDetails = () => {
  useEffect(()=>{
    document.title = "Eco | AdventureDetails"
  },[])
  const {
    AdventureTitle,
    Image,
    CategoryName,
    ShortDescription,
    AdventureCost,
    Location,
    Duration,
    AdventureLevel,
    IncludedItems,
    EcoFriendlyFeatures,
    MaxGroupSize,
    SpecialInstructions,
  } = useLoaderData();
  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    if (hours >= 10 && hours < 20) {
      window.open("https://meet.google.com/tzz-opeh-zus", "_blank");
    } else {
        document.getElementById("my_modal_1").showModal()
    }
  };




  return (
    <div>
      <div className="w-11/12 mx-auto my-8">
        <div className="w-full md:w-3/6 mx-auto flex flex-col justify-center items-center">
          <div className="rounded-xl mb-8">
            <img src={Image} alt="" className="w-full rounded-xl" />
          </div>
          <h1 className="text-4xl font-semibold">Title: {AdventureTitle}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-3">
            <div className="space-y-3">
              <h1 className="text-base font-bold">
                Category Name:{" "}
                <span className="!font-medium">{CategoryName}</span>
              </h1>
              <p className="font-bold">
                Short Description:{" "}
                <span className="!font-normal">{ShortDescription}</span>
              </p>
              <p className="font-bold">
                AdventureCost{" "}
                <span className="!font-normal">${AdventureCost}</span>
              </p>
              <p className="font-bold">
                Location: <span className="!font-normal">{Location}</span>
              </p>
              <p className="font-bold">
                Duration: <span className="!font-normal">{Duration}</span>
              </p>
              <p className="font-bold">
                AdventureLevel:{" "}
                <span className="!font-normal"> {AdventureLevel}</span>
              </p>
              <p className="font-bold">
                IncludedItems:{" "}
                {IncludedItems.map((item) => (
                  <>
                    <h6 className="!font-normal">{item}</h6>
                  </>
                ))}
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-bold">
                Eco-Friendly Features:{" "}
                {EcoFriendlyFeatures.map((item) => (
                  <>
                    <h6 className="!font-normal">{item}</h6>
                  </>
                ))}
              </p>
              <p className="font-bold">
                Max Group Size:{" "}
                <span className="!font-normal">{MaxGroupSize}</span>
              </p>
              <p className="font-bold">
                Special Instructions:{" "}
                {SpecialInstructions.map((item) => (
                  <>
                    <h6 className="!font-normal">{item}</h6>
                  </>
                ))}
              </p>
            </div>
          </div>
          <button onClick={handleTalkWithExpert} className="btn my-3">
            Talk with Expert
          </button>
        </div>
      </div>

      {/* ================= */}
      {/* modal  */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Sorry</h3>
          <p className="py-4">
            There is no Expert available. you can talk an expert between 10:00am - 8:00pm
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AdventureDetails;
