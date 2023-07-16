import React, { useContext } from "react";
import "../styles/Navbar.css";
import "../styles/App.css";

import { Link } from "react-router-dom";
import { UserContextAuth } from "../contexts/UserContext";
import Logout from "./Logout";

function Navbar({ isLoggedIn, onLogout }) {
  const { user } = useContext(UserContextAuth);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          Bookshelf Assistant
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                {isLoggedIn === false && (
                  <Link className="nav-link nav-item login" to="/login">
                    <span className="material-symbols-outlined">
                      account_circle
                    </span>
                  </Link>
                )}
              </li>
              <li>
                {isLoggedIn && <Logout onLogout={onLogout} />}
             
                <span>{user && user.name} </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
