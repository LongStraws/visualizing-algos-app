import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  //const activeLink = "bg-blue-100 text-black";
  //const normalLink = "";
  return (
    <div className='navbar'>
      <div className='navbar-logo'>Pathfinding and Sorting Visualizer</div>
      <div className='navbar-links'>
        <CustomLink to='/'>PathFinding </CustomLink>
        <CustomLink to='/SortingVisualizer'> SortingVisualizer</CustomLink>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
}
