import React from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";

function Header() {
  return (
    <header className="p-5 ">
      <div>
        <Logo />
      </div>
    </header>
  );
}

export default Header;
