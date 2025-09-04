import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import headerPhoto from "./../../assets/Icon-8x.png";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { user,signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
    .then(() => {
      console.log("User Logout Successful")
    })
    .catch(err => {
      console.log("Error Message")
    })
  }

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addCoffee">Add Coffee</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex  items-center">
          <Link
            to="/"
            className=" font-josefin font-semibold normal-case text-2xl"
          >
            <img className="w-[55px]" src={headerPhoto} alt="" />
          </Link>
        </div>

        <a className="btn btn-ghost text-xl text-[#4167F0]">Career Craft</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn bg-[#4167F0] text-white">Log Out</button>
          </>
        ) : (
          <>
            <Link className="mr-3 underline text-[#4167F0]" to="/register">
              Register
            </Link>
            <Link to="/signin">
            <button  className="btn bg-[#4167F0] text-white">Log In</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
