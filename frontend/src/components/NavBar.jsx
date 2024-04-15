import React from 'react'
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav className="nav-bar">
        <NavLink to="/home" className="nav-link">
            Home
        </NavLink>
        <NavLink to="/registration" className="nav-link">
            Registration
        </NavLink>
        <NavLink to="/directory" className="nav-link">
            Directory
        </NavLink>
        <NavLink to="/code-of-conduct" className="nav-link">
            Code of Conduct
        </NavLink>
    </nav>
  );
};

export default NavBar