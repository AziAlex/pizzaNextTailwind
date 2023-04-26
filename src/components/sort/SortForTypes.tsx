import React, { FC } from "react";
import { RootState } from "@/redux/store";
import { setActiveLink } from "@/redux/sortPizza/sortActiveSlice";
import { sortTypes } from "@/redux/sortPizza/sortSlice";
import { useDispatch, useSelector } from "react-redux";

const SortForTypes: FC = () => {
  const dispatch = useDispatch();
  const sortBar = useSelector((state: RootState) => state.sorts.sort);

  return (
    <ul className="flex py-2 overflow-auto pb-3">
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link1.id)),
            dispatch(sortTypes.SortDefault());
        }}
        className={sortBar.link1.select ? "active sort-item" : "sort-item"}
      >
        Все
      </li>
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link2.id)),
            dispatch(sortTypes.SortMeat());
        }}
        className={sortBar.link2.select ? "active sort-item" : "sort-item"}
      >
        Мясные
      </li>
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link3.id)),
            dispatch(sortTypes.SortVegetarian());
        }}
        className={sortBar.link3.select ? "active sort-item" : "sort-item"}
      >
        Вегетарианская
      </li>
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link4.id)),
            dispatch(sortTypes.SortGrill());
        }}
        className={sortBar.link4.select ? "active sort-item" : "sort-item"}
      >
        Гриль
      </li>
      <li
        onClick={() => {
          dispatch(setActiveLink(sortBar.link5.id)),
            dispatch(sortTypes.Sortsharp());
        }}
        className={sortBar.link5.select ? "active sort-item" : "sort-item"}
      >
        Острые
      </li>
    </ul>
  );
};

export default SortForTypes;
