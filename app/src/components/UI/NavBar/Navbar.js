import Icon from "../Icon/Icon";
import "./Navbar.css";
import { useState } from "react";
import NavContent from "./NavContent/NavContent";

function NavBar(props) {
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenuHandler = () => {
    setMenuToggle((previousState) => {
      return !previousState;
    });
  };
  return (
    <header>
      <nav className={"navbar"}>
        <h1>Brand</h1>
        <Icon status={menuToggle} toggleMenu={toggleMenuHandler} />
        <NavContent />
      </nav>
      <div className={`overlay ${menuToggle ? "active" : ""}`}>
        <NavContent />
      </div>
    </header>
  );
}

export default NavBar;
