import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import './header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <Link to="/">Chat App</Link>
        </div>
        <div className="nav-links">
          {!auth().currentUser ? (
            <Fragment>
              <Link to="/chat">Profile</Link>
              <button onClick={() => auth().signOut()}>Logout</button>
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/login" className="nav-links-item">
                Login
              </Link>
              <Link to="/signup" className="nav-links-item">
                Signup
              </Link>
            </Fragment>
          )}
        </div>
      </nav>
    </header>
  );
}
