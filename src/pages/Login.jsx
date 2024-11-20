import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

const Login = () => {
  const { userLogin, setUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
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
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("You Have successfully login");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("You have successfully login with google");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex mx-auto">
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-5xl font-semibold">Login</h1>
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
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <Link
              to={"/auth/resetpassword"}
              href="#"
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </Link>
          </label>
        </div>
        {error.password && (
          <label className="label text-xs text-red-600">{error.password}</label>
        )}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>
          If you have don't any Account{" "}
          <Link to="/auth/register" className="text-red-600">
            Register Now
          </Link>
        </p>
      </form>
      <div className="flex flex-col justify-center items-center pb-6">
        <hr className="w-full " />
        <p>OR</p>
        <hr className="w-full" />
        <button onClick={loginWithGoogle} className="btn w-[90%] my-3">
          {" "}
          <FcGoogle />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
