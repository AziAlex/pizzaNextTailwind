import React from "react";
import Image from "next/image";
import Link from "next/link";

const BasketNotFound: React.FC = () => (
  <div className="flex flex-col items-center gap-8 p-4">
    <div className="text-center">
      <h1 className="mb-2 font-semibold text-xl">Корзина пустая 😕</h1>
      <p className=" max-w-xl">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
    </div>
    <Image
      src="/basket-gol.png"
      alt="Basket not found"
      width={600}
      height={600}
    />
    <Link className="px-6 py-3 bg-black text-white rounded-3xl" href="/">
      Вернуться назад
    </Link>
  </div>
);

export default BasketNotFound;
