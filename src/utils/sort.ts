import { IPizza } from "@/types/pizzaType";

export const sortABC = (arr: IPizza[]) => {
  return arr.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};
export const sortCBA = (arr: IPizza[]) => {
  return arr.sort((a, b) => {
    if (b.name < a.name) return -1;
    if (b.name > a.name) return 1;
    return 0;
  });
};
