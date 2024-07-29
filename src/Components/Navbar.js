import React, {useEffect} from "react";
import { Link , useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); //uselocation give the current details 
  useEffect(() => {
    console.log(location.pathname) //current location print whenever it changes.
    // eslint-disable-next-line
  }, [location]);
  return (
    <div className="p-3 bg-gray-900 text-gray-300">
      <div className="nav flex justify-around py-2 ">
        <h1 className="text-2xl font-semibold"><Link to="/">INotebook</Link></h1>
        <div className="menu list-none flex gap-10 text-[17px]">
          <li><Link  to="/" className={`${location.pathname === "/" ? "text-white font-semibold" : ""}`}>Home</Link></li>
          <li><Link  to="/about" className={`${location.pathname === "/about" ? "text-white font-semibold" : ""}`}>About</Link></li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
