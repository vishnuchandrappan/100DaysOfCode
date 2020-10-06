import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <h1 className="nav__logo">Bh.. log</h1>
        <div className="nav__links">
          <Link to="/">Home</Link>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/signup">SignUp</Link>
        </div>
      </nav>
    </header>
  );
}
