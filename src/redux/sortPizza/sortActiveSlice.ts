import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISortItems } from "./sort.types";

const initial: ISortItems = {
  link1: { id: 1, select: true },
  link2: { id: 2, select: false },
  link3: { id: 3, select: false },
  link4: { id: 4, select: false },
  link5: { id: 5, select: false },
  link6: { id: 6, select: false },
};

const initialState = {
  sort: initial,
};

export const sortBar = createSlice({
  name: "sortPizza",
  initialState,
  reducers: {
    setActiveLink: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.sort = {
        link1: { id: 1, select: 1 === id ? true : false },
        link2: { id: 2, select: 2 === id ? true : false },
        link3: { id: 3, select: 3 === id ? true : false },
        link4: { id: 4, select: 4 === id ? true : false },
        link5: { id: 5, select: 5 === id ? true : false },
        link6: { id: 6, select: 6 === id ? true : false },
      };
    },
  },
});

export const { setActiveLink } = sortBar.actions;
export default sortBar.reducer;
