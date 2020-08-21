import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Button } from "@material-ui/core";

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <header>
      <h1>FilMy.</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list-movie">Cari Film</Link>{" "}
          </li>
          <li>
            <Link to="/list-game">Cari Game</Link>{" "}
          </li>
          <li>
            <Link to="/about">About </Link>{" "}
          </li>
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
