import React, { FC, PropsWithChildren } from "react";
import Logo from "./subComponents/Logo";
import { useRouter } from "next/router";
import Basket from "./subComponents/Basket";

const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header className="flex justify-between p-3">
      <Logo />
      {pathname !== "/basket" ? <Basket /> : null}
    </header>
  );
};

export default Header;
