import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <>
      <div>
        <NavLink to="/home" activeClassName="activeNavlink">
          Home
        </NavLink>
        <NavLink to="/Projects" activeClassName="activeNavlink">
          Projects
        </NavLink>
        <NavLink to="/about" activeClassName="activeNavlink">
          About
        </NavLink>{" "}
        <NavLink to="/contact" activeClassName="activeNavlink">
          Contact
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
