import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllItems } from "@/redux/buySlice/buySlice";

interface typeModal {
  activeModal: boolean;
  setActiveModal: Function;
}

const Modal: React.FC<typeModal> = ({ setActiveModal, activeModal }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => setActiveModal(false)}
      className={
        activeModal
          ? "fixed z-50 bg-black bg-opacity-50 w-screen h-screen top-0 left-0"
          : "hidden"
      }
    >
      <div className="absolute bg-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-6 rounded-2xl w-screen msm:w-96">
        <h2 className="text-center text-lg font-bold mb-6">
          Вы уверны что хотите очстить корзину?
        </h2>
        <div className="flex justify-around font-bold">
          <button
            className="border-2 border-orange-500  py-2 px-4 rounded-md duration-200 hover:bg-orange-500 hover:text-white"
            onClick={() => setActiveModal(false)}
          >
            НЕТ
          </button>
          <button
            className="border-2 border-orange-500 py-2 px-4 rounded-md duration-200 hover:bg-orange-500 hover:text-white"
            onClick={() => {
              setActiveModal(false);
              dispatch(deleteAllItems());
            }}
          >
            ДА
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
