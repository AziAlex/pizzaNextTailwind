import React, { FC, PropsWithChildren } from "react";
import { IMeta } from "./meta.type";
import Head from "next/head";

const Meta: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | NextPizza` : "NextPizza"}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta
              name="og:title"
              content={title ? `${title} | NextPizza` : "NextPizza"}
            />
            <meta name="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
    </>
  );
};

export default Meta;
