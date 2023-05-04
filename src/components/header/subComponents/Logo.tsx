import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Logo: FC = () => (
  <Link href="/">
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={40}
        height={40}
        className=" h-10 mr-2"
      />
      <div>
        <h1 className="hidden sm:block font-black text-xl">NextPizza</h1>
        <small className="hidden sm:block">
          самая вкусная пицца во вселенной
        </small>
      </div>
    </div>
  </Link>
);

export default Logo;
