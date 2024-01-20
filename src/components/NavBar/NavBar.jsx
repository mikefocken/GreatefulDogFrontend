import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Greateful Dog Rescue</b>
          </Link>
        </li>

        <li>
          <Link to="/MatchMaker">
            <button>Match Maker</button>
          </Link>
        </li>

        <li className="flex-containerNav">
          <div>
            <a href="SearchPage">Search</a>
          </div>

          <div>
            <a href="AdopterPage">Adopter Forms</a>
          </div>
          <div>
            {" "}
            {user && user.admin ? <a href="AdminPage">Admin</a> : null}
          </div>

          <div>
            <a href="HomePage">Home</a>
          </div>
        </li>
        <div>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
