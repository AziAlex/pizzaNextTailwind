import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Buy: FC = () => {
  return (
    <div className="flex flex-col items-center text-lg font-semibold gap-2 msm:flex-row justify-between mx-4">
      <Link href="/">
        <button className="flex items-center gap-1 text-zinc-400 border-2 border-zinc-300 py-2 px-4 rounded-3xl">
          <Image src="/_Path_.svg" alt="back" width={10} height={10} />
          Вернуться назад
        </button>
      </Link>
      <button className="text-orange-500 border-2 border-orange-500 py-2 px-4 rounded-3xl hover:bg-orange-500 hover:text-white">
        Оплатить сейчас
      </button>
    </div>
  );
};

export default Buy;
