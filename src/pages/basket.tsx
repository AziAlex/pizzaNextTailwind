import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BuyItems from "@/components/buy/BuyItems";
import ClearBasket from "@/components/buy/ClearBasket";
import Price from "@/components/buy/Price";
import Layout from "@/components/layout/Laout";
import Buy from "@/components/buy/Buy";
import BasketNotFound from "@/components/buy/BasketNotFound";

const Basket: FC = () => {
  const items = useSelector((state: RootState) => state.buyBasket.buyItems);

  return (
    <Layout title="Корзина" description="Корзина товаров">
      {items.length ? (
        <div className=" max-w-3xl m-auto flex flex-col gap-6">
          <ClearBasket />
          <BuyItems />
          <Price />
          <Buy />
        </div>
      ) : (
        <BasketNotFound />
      )}
    </Layout>
  );
};

export default Basket;
