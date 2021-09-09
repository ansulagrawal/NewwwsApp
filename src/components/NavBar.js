import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> NewwwsApp </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-dark`}>
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${props.mode === "light" ? "dark" : "light"
                  }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {`Enable ${props.mode === "light" ? "Dark" : "Light"}mode`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.defaultProps = {
  mode: 'light',
  toggleMode: 'light',
}

NavBar.propType = {
  mode: PropTypes.string,
  toggleMode: PropTypes.string
}

export default NavBar;
