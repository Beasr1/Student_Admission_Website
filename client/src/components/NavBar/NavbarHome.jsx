import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React from "react";
import "./NavBar.css";
function NavbarHome({ logged }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="/Admission">Admissions</Link>
      <Link to="/About">About</Link>
      <Link to="/timetable">Time Table</Link>

      <div className="DropDown">
        <button className="dropbtn">Students</button>
        <div className="DropDown-content">
          <Link to="/Gallery">Gallery</Link>
          <Link to="/Placement">Placement</Link>
          <Link to="/life">Life At Lnmiit</Link>
        </div>
      </div>
      {!logged && (
        <Link to="/login">
          <button id="logout-nav">Login</button>
        </Link>
      )}
      {logged && (
        <Link>
          <button id="logout-nav" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      )}
    </div>
  );
}

export default NavbarHome;
