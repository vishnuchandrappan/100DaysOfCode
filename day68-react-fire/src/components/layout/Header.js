import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useUser } from "reactfire";
import LogoutButton from "../buttons/LogoutButton";

const Header = () => {
  const user = useUser();

  return (
    <header>
      <nav>
        <div className="nav-logo">Ch4t 4pp</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {user ? (
            <Fragment>
              <Link to="/chat">Chat</Link>
              <LogoutButton />
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </Fragment>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
