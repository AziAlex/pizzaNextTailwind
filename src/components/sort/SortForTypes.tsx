import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/hook";
import { IsortItem } from "@/redux/sortPizza/sort.types";
import { Sort } from "@/redux/sortPizza/sortSlice";
import { setActiveLink } from "@/redux/sortPizza/sortActiveSlice";

const pizzaSortTypes = [
  { id: 1, name: "все", type: "all" },
  { id: 2, name: "мясные", type: "meat" },
  { id: 3, name: "вегетарианская", type: "vega" },
  { id: 4, name: "гриль", type: "gril" },
  { id: 5, name: "острые", type: "sharp" },
];

const SortForTypes: FC = () => {
  const dispatch = useAppDispatch();
  const sortBar = useAppSelector((state) => state.sorts.sort);
  const sortActive: IsortItem[] = Object.values(sortBar);

  const sortHandler = (id: number, type: string) => {
    dispatch(Sort(type));
    dispatch(setActiveLink(id));
  };

  return (
    <ul className="flex py-2 overflow-auto pb-3">
      {pizzaSortTypes.map(({ id, name, type }, index) => (
        <li
          key={id}
          className={
            sortActive[index].select ? "active sort-item" : "sort-item"
          }
          onClick={() => sortHandler(id, type)}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default SortForTypes;
