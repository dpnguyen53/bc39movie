import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavbarHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        {/* Brand */}
        <a className="navbar-brand" href="#s">
          Navbar
        </a>
        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-dark nav-link" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-dark nav-link" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-white text-dark nav-link" : "nav-link"
                }
                to="/list-movie"
              >
                List Movie
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
