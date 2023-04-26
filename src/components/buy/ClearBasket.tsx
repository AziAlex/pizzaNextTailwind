import React, { FC, useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

const ClearBasket: FC = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <div className="flex justify-center msm:justify-between px-4 mt-4 font-semibold">
      <h1 className="hidden msm:flex items-center gap-2">
        <Image alt="basket" src="/Vector.svg" width={20} height={20} /> Корзина
      </h1>
      <h2
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setActiveModal(true)}
      >
        <Image alt="clear basket" src="/Vector.png" width={20} height={20} />
        Очистить корзину
      </h2>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
};

export default ClearBasket;
