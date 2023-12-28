import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item px-2">
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Create
            </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink
              to="/read"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Read
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
