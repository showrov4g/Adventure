import gallery1 from "../assets/gallery/g1 (1).jpg";
import gallery2 from "../assets/gallery/g1 (2).jpg";
import gallery3 from "../assets/gallery/g1 (3).jpg";
import gallery4 from "../assets/gallery/g1 (4).jpg";
import gallery5 from "../assets/gallery/g1 (5).jpg";
import gallery6 from "../assets/gallery/g1 (6).jpg";
import gallery7 from "../assets/gallery/g1 (7).jpg";
import gallery8 from "../assets/gallery/g1 (8).jpg";

const GallerySection = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-5xl font-bold my-5">Adventure Gallery</h1>
      <div className="grid grid-cols-4 gap-5">
        <div className="card bg-base-100  shadow-xl">
          <figure>
            <img className="rounded-lg"
              src={gallery1}
              alt="Shoes"
            />
          </figure>

        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-lg"
              src={gallery2}
              alt="Shoes"
            />
          </figure>

        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-lg"
              src={gallery3}
              alt="Shoes"
            />
          </figure>

        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-lg"
              src={gallery4}
              alt="Shoes"
            />
          </figure>

        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-lg"
              src={gallery5}
              alt="Shoes"
            />
          </figure>

        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-lg"
              src={gallery6}
              alt="Shoes"
            />
          </figure>

        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-lg"
              src={gallery7}
              alt="Shoes"
            />
          </figure>

        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-lg"
              src={gallery8}
              alt="Shoes"
            />
          </figure>

        </div>
      </div>
    </div>
  );
};

export default GallerySection;
