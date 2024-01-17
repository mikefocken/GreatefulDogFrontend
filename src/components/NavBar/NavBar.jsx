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
          <button> Meet Our pack</button>
        </li>
        <Link to="/MatchMaker">
          <button>Match Maker</button>
        </Link>
        <Link to="/SearchPage">
          <button>Search</button>
        </Link>
        
        <Link to="/AdopterPage">
          <button>Forms & status</button>
        </Link>
        <Link to="/AdminPage">
          <button>Admin</button>
        </Link>
        

        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
