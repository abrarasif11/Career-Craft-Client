import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
