import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-3 bg-gray-900 text-white">
      <div className="nav flex justify-around py-2 ">
        <h1 className="text-2xl font-semibold"><Link to="/">INotebook</Link></h1>
        <div className="menu list-none flex gap-10 text-[17px]">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
