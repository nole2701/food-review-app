/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand fixed-top navbar-black bg-black ps-5 pe-5 justify-content-around">
        <Link to="/" className="navbar-brand align-top text-white" href="#">
          <img
            className="me-2 align-top d-inline-block"
            src="/images/logo.png"
            width="60"
          ></img>
          NEU
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav align-top me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                tag={Link}
                exact
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link text-danger" : "nav-link text-white"
                }
                href="#"
              >
                <i className="bi bi-house-fill me-2"></i>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                tag={Link}
                exact
                to="/search"
                className={({ isActive }) =>
                  isActive ? "nav-link text-danger" : "nav-link text-white"
                }
                href="#"
              >
                <i className="bi bi-search me-2"></i>
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                tag={Link}
                exact
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "nav-link text-danger" : "nav-link text-white"
                }
                href="#"
              >
                <i className="bi bi-person-fill me-2"></i>
                Profile
              </NavLink>
            </li>
          </ul>
        </div>

        <form className="form-inline">
          <button className="btn btn-primary" type="submit">
            Log-In
          </button>
        </form>
      </nav>
      <div className="list-group"></div>
    </div>
  );
};

export default Navbar;
