import React, { useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/hook";
import { SortAmountAndAlphabet } from "@/redux/sortPizza/sortSlice";

const SortAmountAlphabet = [
  { id: 1, type: "ABC", img: "/sort-svg/img1.png" },
  { id: 2, type: "CBA", img: "/sort-svg/img2.png" },
  { id: 3, type: "123", img: "/sort-svg/img3.png" },
  { id: 4, type: "321", img: "/sort-svg/img4.png" },
];

const SortAmount: React.FC = () => {
  const [menuState, setMenuState] = useState(false);
  const dispatch = useAppDispatch();

  const sortHandler = (type: string) => {
    setMenuState(!menuState);
    dispatch(SortAmountAndAlphabet(type));
  };

  return (
    <div className="relative">
      <Image
        src="/sort-7.svg"
        alt="sort"
        width={30}
        height={30}
        onClick={() => setMenuState(!menuState)}
        className=" cursor-pointer mx-2"
      />
      <ul className={menuState ? "sort active-sort" : "sort"}>
        {SortAmountAlphabet.map(({ id, img, type }) => (
          <li key={id} onClick={() => sortHandler(type)}>
            <Image alt={type} width={20} height={20} src={img} />
            {` ${type}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortAmount;
