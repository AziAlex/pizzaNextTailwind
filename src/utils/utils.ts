import { ISise, IType } from "@/types/pizzaType";

export const newPizzaTypeSize = (obj: ISise | IType) => {
  const truePrice = Object.entries(obj).map((i) => i);
  return truePrice.find((i) => i[1].select === true)?.[1];
};
