import { Link } from "react-router-dom";

const SingleAdvinterCard = ({ adventure }) => {
  const { AdventureTitle, Image, EcoFriendlyFeatures,ID } = adventure;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className="h-72"
            src={Image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{AdventureTitle}</h2>
          <h3 className="font-semibold">Eco Friendly Feature: </h3>
          <p>{EcoFriendlyFeatures.map(feature => <div>{feature}</div>)}</p>
          <div className="card-actions justify-end">
           <Link to={`/AdventureDetails/${ID}`}> <button className="btn btn-primary">Explore Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAdvinterCard;
