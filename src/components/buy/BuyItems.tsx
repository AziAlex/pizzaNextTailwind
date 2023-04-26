import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { formatPrice } from "@/utils/formatValue";
import {
  removeItem,
  incrementCount,
  decrementCount,
} from "@/redux/buySlice/buySlice";
import Image from "next/image";

const BuyItems: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.buyBasket.buyItems);

  return (
    <ul className="items-block">
      {items.map((item) => (
        <li className="buy-item" key={item.id}>
          <div className="left-block">
            <Image src={item.img} alt={item.name} width={80} height={80} />
            <div className="info-item">
              <h3>{item.name}</h3>
              <p>
                {item.type} {item.sise}
              </p>
            </div>
          </div>
          <div className="right-block">
            <div className="add-remove-item">
              <button onClick={() => dispatch(decrementCount(item))}>-</button>
              <h2>{item.count}</h2>
              <button onClick={() => dispatch(incrementCount(item))}>+</button>
            </div>
            <h3 className="item-price">{formatPrice(item.tottalPrice)}</h3>
            <button
              onClick={() => dispatch(removeItem(item))}
              className="remove-item"
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BuyItems;
