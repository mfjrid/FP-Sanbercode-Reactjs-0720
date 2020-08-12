import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <header>
      <img id="logo" src="/img/logo.png" width="200px" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About </Link>{" "}
          </li>
          {user && (
            <li>
              <Link to="/movies">Movie List Editor </Link>
            </li>
          )}
          {user === null && (
            <li>
              <Link to="/login">Login </Link>
            </li>
          )}
          {user === null && (
            <li>
              <Link to="/register">Register </Link>
            </li>
          )}
          {user && (
            <li>
              <a style={{ cursor: "pointer" }} onClick={handleLogout}>
                Logout{" "}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
