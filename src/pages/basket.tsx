import Buy from "@/components/buy/Buy";
import BuyItems from "@/components/buy/BuyItems";
import ClearBasket from "@/components/buy/ClearBasket";
import Price from "@/components/buy/Price";
import Layout from "@/components/layout/Laout";
import React from "react";

const basket = () => {
  return (
    <Layout title="Корзина" description="Корзина товаров">
      <div className=" max-w-3xl m-auto flex flex-col gap-6">
        <ClearBasket />
        <BuyItems />
        <Price />
        <Buy />
      </div>
    </Layout>
  );
};

export default basket;
