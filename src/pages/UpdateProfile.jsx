import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { setUser, updateUserProfile, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const profileUpdate = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    console.log(name);
    const photo = form.get("photo");
    console.log(photo);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
    .then((data)=>{
        // profile update 

    })
    .catch((error)=>{
        console.log(error);
    })
    navigate(location?.state ? location.state : "/profile");
  };
  return (
    <div className="w-11/12 mx-auto">
      <NavBar></NavBar>
      <form onSubmit={profileUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="inter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
