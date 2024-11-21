import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, Outlet } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col justify-center items-center space-y-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold">
              Welcome to:{" "}
              <span className="text-green-600"> {user?.displayName}</span>
            </h2>
          </div>
          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-32 md:w-52 rounded-full ring ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h4 className="border border-gray-500 p-3 m-1 rounded-md text-sm md:text-3xl">
              You Email: {user?.email}
            </h4>
            <h4 className="border border-gray-500 p-3 m-1 rounded-md text-sm md:text-3xl">
              Your Name: {user?.displayName}
            </h4>

            <Link to="/updateProfile">
              <button className="btn bg-green-500">Update Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
