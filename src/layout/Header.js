import React from "react";
import { NavLink } from "react-router-dom/";

const activeNavLink = {
  fontWeight: 400,
};

function Header() {
  return (
    <header>
      <h1>Teknolojik Yemekler</h1>
      <div>
        <nav>
          <ul className="navlinks">
            <li>
              <NavLink to={"/"}> Anasayfa </NavLink>
            </li>
            <span> - </span>
            <li>
              <NavLink to={"/order"}> Seçenekler </NavLink>
            </li>
            <span> - </span>

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
    </header>
  );
}

export default Header;
