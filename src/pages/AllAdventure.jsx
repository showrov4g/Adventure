import AdvantureCard from "../Components/AdvantureCard";
import NavBar from "../Components/NavBar";

const AllAdventure = () => {
  return <div className="w-11/12 mx-auto">
    <NavBar></NavBar>
    <h1>All Adventure</h1>
    <AdvantureCard></AdvantureCard>
  </div>;
};

export default AllAdventure;
