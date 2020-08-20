import React from "react";
import { Link } from "react-router-dom";
import './header.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <h3>Protected Routes</h3>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
