import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, Outlet } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto">
      <NavBar></NavBar>
      <div className="flex flex-col justify-center items-center space-y-6">
        <div>
            <h2 className="text-5xl font-semibold">Welcome to: <span className="text-green-600"> {user?.displayName}</span></h2>
        </div>
        <div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-60 rounded-full ring ring-offset-2">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
            <h4 className="border border-gray-500 p-3 m-1 rounded-md text-3xl">{user?.email}</h4>
            <h4 className="border border-gray-500 p-3 m-1 rounded-md text-3xl">{user?.displayName}</h4>
            
        <Link to="/updateProfile"><button className="btn">Update Profile</button></Link>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MyProfile;
