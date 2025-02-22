import React, { useContext, useEffect } from "react";
import NavBar from "../Components/NavBar";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Footer from "../Components/Footer";

const UpdateProfile = () => {
  const { setUser, updateUserProfile, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(()=>{
    document.title = "Eco | UpdateProfile"
  },[])

  const profileUpdate = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
    .then((data)=>{
        // profile update 

    })
    .catch((error)=>{
        toast.error(error)
    })
    navigate(location?.state ? location.state : "/profile");
  };
  return (
    <div>
        <div className="w-11/12 mx-auto">
      <form onSubmit={profileUpdate} className="card-body w-full md:w-4/12 mx-auto">
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
    </div>
  );
};

export default UpdateProfile;
