import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortPrices } from "../../redux/sortPizza/sortSlice";
import Image from "next/image";

const SortAmount: React.FC = () => {
  const [menuState, setMenuState] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <Image
        id="sort-burger"
        src="/sort-7.svg"
        alt="sort"
        width={30}
        height={30}
        onClick={() => setMenuState(!menuState)}
        className=" cursor-pointer mx-2"
      />
      <ul className={menuState ? "sort active-sort" : "sort"}>
        <li
          onClick={() => {
            setMenuState(!menuState);
            dispatch(sortPrices.SortABC());
          }}
        >
          <Image alt="sort" width={20} height={20} src="/sort-svg/img1.png" />{" "}
          ABCDE
        </li>
        <li
          onClick={() => {
            setMenuState(!menuState);
            dispatch(sortPrices.SortCBA());
          }}
        >
          <Image alt="sort" width={20} height={20} src="/sort-svg/img2.png" />{" "}
          EDCBA
        </li>
        <li
          onClick={() => {
            setMenuState(!menuState);
            dispatch(sortPrices.Sort123());
          }}
        >
          <Image alt="sort" width={20} height={20} src="/sort-svg/img3.png" />{" "}
          1234
        </li>
        <li
          onClick={() => {
            setMenuState(!menuState);
            dispatch(sortPrices.Sort321());
          }}
        >
          <Image alt="sort" width={20} height={20} src="/sort-svg/img4.png" />{" "}
          4321
        </li>
      </ul>
    </div>
  );
};

export default SortAmount;
