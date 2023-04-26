import Buy from "@/components/buy/Buy";
import ClearBasket from "@/components/buy/ClearBasket";
import Price from "@/components/buy/Price";
import Layout from "@/components/layout/Laout";
import React from "react";

const basket = () => {
  return (
    <Layout>
      <div className=" max-w-3xl m-auto">
        <ClearBasket />
        {/* <Price /> */}
        {/* <Buy /> */}
      </div>
    </Layout>
  );
};

export default basket;
