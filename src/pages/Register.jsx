import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../Firebase/Firebase.config";

const Register = () => {

  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
    if (password.length < 6) {
      setError({
        ...error,
        password: "Password Must be more than 6 Character",
      });
      return toast.error("Password Must be more than 6 Character");
    }
    if (!regex.test(password)) {
      return setError({
        ...error,
        password:
          "Password must have One Uppercase, one Lowercase and one Number",
      });
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({displayName:name, photoURL: photo})
        navigate(location?.state ? location.state : "/");
        toast.success("You have successfully create your account")
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };
  const loginWithGoogle = ()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/");
      toast.success("You have successfully login with google")
    })
    .catch(error=>{
      toast.error(`${error.message}`);
    })
  }
  useEffect(()=>{
    document.title = "Eco | register"
  },[])
 


  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex mx-auto">
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-5xl font-semibold">Register Now</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="Photo-URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        {error.password && (
          <label className="label text-xs text-red-600">{error.password}</label>
        )}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>
          If you have don't any Account{" "}
          <Link to="/auth/login" className="text-red-600">
            Login Now
          </Link>
        </p>
      </form>
      <div className="flex flex-col justify-center items-center pb-6">
        <hr className="w-full " />
        <p>OR</p>
        <hr className="w-full" />
        <button onClick={loginWithGoogle} className="btn w-[90%] my-3"> <FcGoogle />Login With Google</button>
      </div>
    
    </div>
  );
};

export default Register;
