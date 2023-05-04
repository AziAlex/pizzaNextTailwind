import React from "react";
import { formatPrice } from "@/utils/formatValue";
import {
  removeItem,
  incrementCount,
  decrementCount,
} from "@/redux/buySlice/buySlice";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hook";

const BuyItems: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.buyBasket.buyItems);

  return (
    <ul className="items-block">
      {items.map((item) => (
        <li
          className="flex flex-col items-center msm:flex-row msm:justify-between mx-1 px-2 shadow-md shadow-black my-2 p-2"
          key={item.id}
        >
          <div className="flex items-center w-full justify-around msm:w-fit msm:justify-start">
            <Image src={item.img} alt={item.name} width={80} height={80} />
            <div className="info-item">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p>
                {item.type} {item.sise}
              </p>
            </div>
          </div>
          <div className="flex items-center w-full justify-around msm:w-fit msm:gap-2 sm:w-1/2">
            <div className="flex items-center gap-2">
              <button
                className="border-2 border-orange-500 w-6 h-6 rounded-full flex justify-center items-center hover:bg-orange-500 before:w-4 before:h-0.5 before:bg-orange-500 hover:before:bg-white"
                onClick={() => dispatch(decrementCount(item))}
              ></button>
              <h2 className="font-bold text-xl">{item.count}</h2>
              <button
                className="border-2 border-orange-500 w-6 h-6 rounded-full flex justify-center items-center hover:bg-orange-500 before:w-0.5 before:h-4 before:bg-orange-500 after:w-4 after:h-0.5 after:bg-orange-500 after:absolute hover:before:bg-white hover:after:bg-white"
                onClick={() => dispatch(incrementCount(item))}
              ></button>
            </div>
            <h3 className="text-xl font-bold">
              {formatPrice(item.tottalPrice)}
            </h3>
            <button
              onClick={() => dispatch(removeItem(item))}
              className="rotate-45 border-2 border-orange-500 w-6 h-6 rounded-full flex justify-center items-center hover:bg-orange-500 before:w-0.5 before:h-4 before:bg-orange-500 after:w-4 after:h-0.5 after:bg-orange-500 after:absolute hover:before:bg-white hover:after:bg-white"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BuyItems;
