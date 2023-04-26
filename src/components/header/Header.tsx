import React, { FC } from "react";
import Logo from "./subComponents/Logo";

const Header: FC = () => {
  return (
    <header className="flex">
      <Logo />
      <h1>purcase</h1>
    </header>
  );
};

export default Header;
