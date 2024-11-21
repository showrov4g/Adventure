const NewsLetter = () => {
  return (
    <div className="w-11/12 md:w-5/6 mx-auto py-10 my-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="w-full md:w-3/6 mx-auto">
        <h1 className="p-6 text-4xl text-white">Subscribe to our NewsLetter to get Update news form us</h1>
        <div>
          <form className="card-body">
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
