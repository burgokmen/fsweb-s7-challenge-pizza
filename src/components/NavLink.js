import React from "react";
import { NavLink } from "react-router-dom/";

const activeNavLink = {
  fontWeight: 400,
};

function NavLink1() {
  return (
    <div>
      <nav>
        <ul className="navlinks">
          <li>
            <NavLink to={"/"}> Anasayfa </NavLink>
          </li>
          <p> - </p>
          <li>
            <NavLink to={"/pizza"}> Seçenekler </NavLink>
          </li>
          <p> - </p>

          <li>
            <NavLink
              to={"/pizza"}
              style={(isActive) => (isActive ? activeNavLink : null)}
            >
              Siparis Olustur
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavLink1;
