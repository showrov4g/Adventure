import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  // +++++++++++++++++
  const [hover, setHover] =useState(false);
  const hoverData = user?.displayName
  const onHover =(e)=>{
    e.preventDefault()
    setHover(true);
  }
  const hoverOut =(e)=>{
    e.preventDefault()
    setHover(false);
  }
  // +++++++++++++++++

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/AllAdventure"}>All Adventure</NavLink>
      </li>
      <li>
        {
          user && user?.email ? <NavLink to={'/profile'}>My Profile</NavLink>: ''
        }
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Eco-Adventure
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        <div className="w-10 h-10 rounded-full">

          {user && user?.email ? (
            <img onMouseEnter={(e)=>onHover(e)} onMouseLeave={(e)=>hoverOut(e)}
              className="w-full h-full rounded-full"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            ""
          )}
                    {
            hover && <p className={hover}>{hoverData}</p>
          }
        </div>
        <div>
          {user && user?.email ? (
            <button onClick={logOut} className="btn">
              Log out
            </button>
          ) : (
            <Link to="/auth/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
