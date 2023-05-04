import { vId } from "@/utils/formatValue";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaState } from "@/types/pizzaType";

interface Items {
  buyItems: PizzaState[];
}

const initialState: Items = {
  buyItems: [],
};

const buyState = createSlice({
  name: "buyItems",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<PizzaState>) => {
      const { sise, type, name } = action.payload;

      const item1 = state.buyItems.find(
        (item) => item.name === name && item.type === type && item.sise === sise
      );
      const item2 = state.buyItems.find(
        (item) =>
          item.name === name && (item.type !== type || item.sise !== sise)
      );
      const item3 = state.buyItems.find((item) => item.name !== name);

      if (item1) {
        item1.count += 1;
        item1.tottalPrice = item1.count * item1.price;
      } else if (item2) {
        state.buyItems.push({
          ...action.payload,
          id: vId(),
        });
      } else if (item3) {
        state.buyItems.push(action.payload);
      } else if (!state.buyItems.length) {
        state.buyItems.push(action.payload);
      }
    },
    deleteAllItems: (state) => {
      state.buyItems.splice(0);
    },
    incrementCount: (state, action: PayloadAction<PizzaState>) => {
      const { id } = action.payload;

      const item = state.buyItems.find((item) => item.id === id);

      if (item) {
        item.count += 1;
        item.tottalPrice = item.count * item.price;
      }
    },
    decrementCount: (state, action: PayloadAction<PizzaState>) => {
      const { id } = action.payload;

      const item = state.buyItems.find((item) => item.id === id);

      if (item?.count === 1) return;

      if (item) {
        item.count -= 1;
        item.tottalPrice = item.count * item.price;
      }
    },
    removeItem: (state, action: PayloadAction<PizzaState>) => {
      state.buyItems = state.buyItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  removeItem,
  addItem,
  deleteAllItems,
  incrementCount,
  decrementCount,
} = buyState.actions;
export default buyState.reducer;
