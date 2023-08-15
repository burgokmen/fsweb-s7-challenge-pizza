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
            <NavLink to={"/order"}> Seçenekler </NavLink>
          </li>
          <p> - </p>

          <li>
            <NavLink
              to={"/order"}
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
