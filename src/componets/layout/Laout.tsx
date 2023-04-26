import React, { FC, PropsWithChildren } from "react";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.type";

const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <Meta title={title} description={description}>
      {children}
    </Meta>
  );
};

export default Layout;
