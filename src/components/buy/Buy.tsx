import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Buy: FC = () => {
  return (
    <div className="buy-block">
      <Link href="/">
        <button>
          <Image src="/_Path_.svg" alt="back" width={20} height={20} />
          Вернуться назад
        </button>
      </Link>
      <button>Оплатить сейчас</button>
    </div>
  );
};

export default Buy;
