import React, { FC, PropsWithChildren } from "react";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.type";
import Header from "../header/Header";

const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => (
  <Meta title={title} description={description}>
    <div className="wrap rounded-none lg:rounded-3xl">
      <Header />
      <main>{children}</main>
    </div>
  </Meta>
);

export default Layout;
