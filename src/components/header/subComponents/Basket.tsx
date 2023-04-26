import { formatPrice } from "@/utils/formatValue";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Basket: FC = () => {
  const value = 234;
  const count = 3;
  return (
    <Link href="/basket">
      <div className="bg-orange-500 text-white px-4 py-2 rounded-3xl flex justify-between gap-2 hover:bg-orange-600 duration-200">
        <strong>{formatPrice(value)}</strong>
        <span className=" w-0.5 bg-white rounded-md"></span>
        <strong className="flex align-center">
          <Image
            src="/basket.svg"
            alt="basket"
            width={20}
            height={20}
            className="mr-1"
          />
          {count}
        </strong>
      </div>
    </Link>
  );
};

export default Basket;
