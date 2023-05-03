import React, { useEffect, useState } from "react";
import PizzaItem from "./Item";
import { useAppSelector } from "@/hook";

const Items: React.FC = () => {
  const [value, setValue] = useState<string>("Все пиццы");
  const newSortPizza = useAppSelector(
    (state) => state.newPizzaList.filterPizza
  );

  const states = useAppSelector((state) => state.sorts.sort);

  useEffect(() => {
    const typePuzza = document.querySelector(".active")?.textContent;
    setValue(`${typePuzza} пиццы`);
  }, [states]);

  return (
    <main>
      <h1 className="ml-3 font-bold">{value}</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {newSortPizza.length ? (
          newSortPizza.map((pizza) => (
            <PizzaItem
              key={pizza.id}
              id={pizza.id}
              types={pizza.types}
              url={pizza.url}
              name={pizza.name}
              price={pizza.price}
              type={pizza.type}
              width={pizza.width}
            />
          ))
        ) : (
          <h1>нету пицц</h1>
        )}
      </ul>
    </main>
  );
};

export default Items;
