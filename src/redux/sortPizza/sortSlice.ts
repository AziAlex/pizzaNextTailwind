import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPizza } from "@/types/pizzaType";
import { PizzaService } from "@/services/PizzaService";

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
    Sort: (state, action: PayloadAction<string>) => {
      const type = action.payload;
      const { allPizza } = state;

      switch (true) {
        case type === "all":
          state.filterPizza = allPizza;
          break;
        case type === "meat":
          state.filterPizza = allPizza.filter(({ types }) => types === type);
          break;
        case type === "vega":
          state.filterPizza = allPizza.filter(({ types }) => types === type);
          break;
        case type === "gril":
          state.filterPizza = allPizza.filter(({ types }) => types === type);
          break;
        case type === "sharp":
          state.filterPizza = allPizza.filter(({ types }) => types === type);
          break;
      }
    },
    SortABC: (state) => {
      state.filterPizza = state.filterPizza.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    },
    SortCBA: (state) => {
      state.filterPizza = state.filterPizza.sort((a, b) => {
        if (b.name < a.name) return -1;
        if (b.name > a.name) return 1;
        return 0;
      });
    },
    Sort123: (state) => {
      state.filterPizza = state.filterPizza.sort((a, b) => a.price - b.price);
    },
    Sort321: (state) => {
      state.filterPizza = state.filterPizza.sort((a, b) => b.price - a.price);
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

export const { Sort } = sortSlice.actions;

const { SortABC, SortCBA, Sort123, Sort321 } = sortSlice.actions;
export const sortPrices = {
  SortABC,
  SortCBA,
  Sort123,
  Sort321,
};

export default sortSlice.reducer;
