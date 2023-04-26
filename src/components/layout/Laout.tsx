import React, { FC, PropsWithChildren } from "react";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.type";
import Header from "../header/Header";

const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <Meta title={title} description={description}>
      <div className="wrap">
        <Header />
        <main>{children}</main>
      </div>
    </Meta>
  );
};

export default Layout;
