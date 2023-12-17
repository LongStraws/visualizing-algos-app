import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const activeLink = "bg-blue-100 text-black";
  const normalLink = "";
  return (
    <div className='navbar'>
      <div className='navbar-logo'>Pathfinding and Sorting Visualizer</div>
      <u1 className='navbar-links'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          PathFinding{" "}
        </NavLink>
        <NavLink
          to='/SortingVisualizer'
          className={({ isActive }) => (isActive = "active")}
        >
          {" "}
          SortingVisualizer
        </NavLink>
      </u1>
    </div>
  );
};

export default Navbar;
