import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPizza } from "@/types/pizzaType";
import { PizzaService } from "@/services/PizzaService";
import { sortABC, sortCBA } from "@/utils/sort";

export const fetchPizza = createAsyncThunk("pizzas/fetchPizzas", async () => {
  const data = await PizzaService.getAll();
  return data;
});

interface IInitialState {
  allPizza: IPizza[];
  filterPizza: IPizza[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  allPizza: [],
  filterPizza: [],
  loading: "idle",
} as IInitialState;

export const sortSlice = createSlice({
  name: "sortPizza",
  initialState,
  reducers: {
    SortTypePizza: (state, action: PayloadAction<string>) => {
      const type = action.payload;
      const { allPizza } = state;

      switch (type) {
        case "all":
          state.filterPizza = allPizza;
          break;
        case "meat":
          state.filterPizza = allPizza.filter(({ types }) => types === type);
          break;
        case "vega":
          state.filterPizza = allPizza.filter(({ types }) => types === type);
          break;
        case "gril":
          state.filterPizza = allPizza.filter(({ types }) => types === type);
          break;
        case "sharp":
          state.filterPizza = allPizza.filter(({ types }) => types === type);
          break;
      }
    },
    SortAmountAndAlphabet: (state, action: PayloadAction<string>) => {
      const str = action.payload;
      const { filterPizza } = state;

      switch (str) {
        case "ABC":
          state.filterPizza = sortABC(filterPizza);
          break;
        case "CBA":
          state.filterPizza = sortCBA(filterPizza);
          break;
        case "123":
          state.filterPizza = filterPizza.sort((a, b) => a.price - b.price);
          break;
        case "321":
          state.filterPizza = filterPizza.sort((a, b) => b.price - a.price);
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      if (state.allPizza.length) return;
      state.allPizza = action.payload;
      state.filterPizza = action.payload;
    });
  },
});

export const { SortTypePizza, SortAmountAndAlphabet } = sortSlice.actions;

export default sortSlice.reducer;
