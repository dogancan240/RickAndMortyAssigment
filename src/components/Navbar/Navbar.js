import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick and Morty <span className="text-primary">WiKi</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link ">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episodes
            </NavLink>
            <NavLink to="locations" className="nav-link">
              Locations
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
