import { Link } from "react-router-dom";
import "./NavBar.css";
function NavbarHome() {
  return (
    <div className="Nav">
      <Link to="/home">Home</Link>
      <Link to="/Admission">Admissions</Link>
      <Link to="/About">About</Link>
      <div className="DropDown">
        <button className="dropbtn">Dropdown</button>
        <div className="DropDown-content">
          <Link to="/Gallery">Gallery</Link>
          <Link to="/Placement">Placement</Link>
          <Link to="/life">Life At Lnmiit</Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarHome;
