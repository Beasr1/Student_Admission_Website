import { Link } from "react-router-dom";
import "./NavBar.css";
function NavbarHome() {
  return (
    <div className="Nav">
      <Link to="/home">Home</Link>
      <Link to="/news">News</Link>
      <div className="DropDown">
        <button className="dropbtn">Dropdown</button>
        <div className="DropDown-content">
          <Link to="/a">Link 1</Link>
          <Link to="/b">Link 2</Link>
          <Link to="/c">Link 3</Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarHome;
