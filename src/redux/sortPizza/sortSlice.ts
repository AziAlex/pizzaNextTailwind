import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pizzas } from "../../../dataPizza";

const initialState = {
  allPizza: pizzas,
};

export const sortSlice = createSlice({
  name: "sortPizza",
  initialState,
  reducers: {
    SortDefault: (state) => {
      state.allPizza = pizzas;
    },
    SortMeat: (state) => {
      state.allPizza = pizzas.filter((pizza) => pizza.types === "meat");
    },
    SortVegetarian: (state) => {
      state.allPizza = pizzas.filter((pizza) => pizza.types === "vega");
    },
    SortGrill: (state) => {
      state.allPizza = pizzas.filter((pizza) => pizza.types === "gril");
    },
    Sortsharp: (state) => {
      state.allPizza = pizzas.filter((pizza) => pizza.types === "sharp");
    },
    SortABC: (state) => {
      state.allPizza = state.allPizza.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    },
    SortCBA: (state) => {
      state.allPizza = state.allPizza.sort((a, b) => {
        if (b.name < a.name) return -1;
        if (b.name > a.name) return 1;
        return 0;
      });
    },
    Sort123: (state) => {
      state.allPizza = state.allPizza.sort((a, b) => a.price - b.price);
    },
    Sort321: (state) => {
      state.allPizza = state.allPizza.sort((a, b) => b.price - a.price);
    },
  },
});

const { SortDefault, SortMeat, SortVegetarian, SortGrill, Sortsharp } =
  sortSlice.actions;

export const sortTypes = {
  SortDefault,
  SortMeat,
  SortVegetarian,
  SortGrill,
  Sortsharp,
};

const { SortABC, SortCBA, Sort123, Sort321 } = sortSlice.actions;

export const sortPrices = {
  SortABC,
  SortCBA,
  Sort123,
  Sort321,
};

export default sortSlice.reducer;
