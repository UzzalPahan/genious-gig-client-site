import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footers from "../Footer/Footer";

const Home = () => {
  return (
    <div className="w-[1150px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footers></Footers>
    </div>
  );
};

export default Home;
