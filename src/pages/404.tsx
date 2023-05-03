import Layout from "@/components/layout/Laout";
import Image from "next/image";
import Router from "next/router";
import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    setTimeout(() => Router.push("/"), 3000);
  }, []);

  return (
    <Layout title="404" description="ошибка страницы">
      <div className="flex items-center justify-center py-40">
        <Image src="/error.png" alt="error" width={600} height={600} />
      </div>
    </Layout>
  );
};

export default Error;
