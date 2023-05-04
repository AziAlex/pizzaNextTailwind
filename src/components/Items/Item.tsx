import React, { useState, useEffect, memo } from "react";
import { formatPrice } from "@/utils/formatValue";
import {
  ISise,
  IType,
  IPizza,
  PizzaState,
  WidthSise,
} from "../../types/pizzaType";
import { addItem } from "@/redux/buySlice/buySlice";
import Image from "next/image";
import { useAppDispatch } from "@/hook";
import { newPizzaTypeSize } from "@/utils/utils";

const PizzaItem: React.FC<IPizza> = ({ url, name, type, width, price, id }) => {
  const [typePizza, setTypePizza] = useState<IType>({ ...type });
  const [widthPizza, setWidthPizza] = useState<ISise>({ ...width });
  const [typesPizza, setTypesPizza] = useState<number>(0);
  const [sisePizza, setSisePizza] = useState<number>(0);
  const dispatch = useAppDispatch();
  const pzType: WidthSise = newPizzaTypeSize(typePizza);
  const pzSise: WidthSise = newPizzaTypeSize(widthPizza);

  const pizzaState: PizzaState = {
    count: 1,
    id: id,
    img: url,
    name: name,
    type: pzType.value,
    sise: pzSise.value,
    price: typesPizza + sisePizza + price,
    tottalPrice: typesPizza + sisePizza + price,
  };

  const typePyzzaHandler = (id: number) => {
    setTypePizza((prev) => ({
      select1: { ...prev.select1, select: id === 1 ? true : false },
      select2: { ...prev.select2, select: id === 2 ? true : false },
    }));
  };
  const widthPyzzaHandler = (id: number) => {
    setWidthPizza((prev) => ({
      select1: { ...prev.select1, select: id === 1 ? true : false },
      select2: { ...prev.select2, select: id === 2 ? true : false },
      select3: { ...prev.select3, select: id === 3 ? true : false },
    }));
  };

  useEffect(() => {
    newPrice();
  }, [widthPizza]);
  useEffect(() => {
    finallPrice();
  }, [typePizza]);

  function newPrice() {
    const arr: WidthSise = newPizzaTypeSize(widthPizza);
    if (arr.value === "26 cm") {
      setSisePizza(0);
    } else if (arr.value === "30 cm") {
      setSisePizza(50);
    } else {
      setSisePizza(100);
    }
  }
  function finallPrice() {
    const arr: WidthSise = newPizzaTypeSize(typePizza);
    if (arr.value === "тонкое") {
      setTypesPizza(0);
    } else {
      setTypesPizza(50);
    }
  }

  const activeType = "bg-white px-2 py-1 rounded-xl w-2/4";
  const inactiveType = "px-3 py-1 w-2/4";
  const activeSise = "bg-white px-2 py-1 rounded-xl w-1/3";
  const inactiveSise = "px-3 py-1 w-1/3";
  return (
    <li className="flex flex-col justify-between items-center my-4">
      <Image draggable={false} src={url} alt="pizza" width={260} height={260} />
      <h2 className="font-bold text-2xl text-center my-2">{name}</h2>
      <div className=" bg-zinc-200 w-64 text-center rounded-xl cursor-pointer select-none">
        <div className="flex">
          <span
            className={typePizza.select1.select ? activeType : inactiveType}
            onClick={() => typePyzzaHandler(typePizza.select1.id)}
          >
            {type.select1.value}
          </span>
          <span
            className={typePizza.select2.select ? activeType : inactiveType}
            onClick={() => typePyzzaHandler(typePizza.select2.id)}
          >
            {type.select2.value}
          </span>
        </div>
        <div className="flex">
          <span
            className={widthPizza.select1.select ? activeSise : inactiveSise}
            onClick={() => widthPyzzaHandler(widthPizza.select1.id)}
          >
            {width.select1.value}
          </span>
          <span
            className={widthPizza.select2.select ? activeSise : inactiveSise}
            onClick={() => widthPyzzaHandler(widthPizza.select2.id)}
          >
            {width.select2.value}
          </span>
          <span
            className={widthPizza.select3.select ? activeSise : inactiveSise}
            onClick={() => widthPyzzaHandler(widthPizza.select3.id)}
          >
            {width.select3.value}
          </span>
        </div>
      </div>
      <div className="flex w-64 justify-between px-2 mt-6">
        <span className="font-bold text-xl">
          от {formatPrice(typesPizza + sisePizza + price)}
        </span>
        <button
          className="font-bold px-3 py-1 rounded-3xl text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white"
          onClick={() => dispatch(addItem(pizzaState))}
        >
          + Добавить
        </button>
      </div>
    </li>
  );
};

export default memo(PizzaItem);
