import { useAppSelector } from "@/hook";
import { RootState } from "@/redux/store";
import { formatPrice } from "@/utils/formatValue";
import React, { FC } from "react";

const Price: FC = () => {
  const allitems = useAppSelector((state) => state.buyBasket.buyItems);
  const tottalPrice = allitems.reduce((acc, item) => acc + item.tottalPrice, 0);
  const tottalBuy = allitems.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="flex flex-col items-center text-lg font-semibold msm:flex-row msm:justify-between mx-4">
      <h2>
        Всего пицц: <span className="font-black">{tottalBuy}</span>
      </h2>
      <h2>
        Сума заказа:{" "}
        <span className="text-orange-500">{formatPrice(tottalPrice)}</span>
      </h2>
    </div>
  );
};

export default Price;
