const SingleAdvinterCard = ({ adventure }) => {
  const { AdventureTitle, Image, EcoFriendlyFeatures } = adventure;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={Image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{AdventureTitle}</h2>
          <p>{EcoFriendlyFeatures.map(feature => <div>{feature}</div>)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAdvinterCard;
