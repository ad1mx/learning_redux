import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import productsSlice from "./features/productsSlice";
import categoriesSlice from "./features/categoriesSlice";
import configSlice from "./features/configSlice";

const store = configureStore({
  reducer: {
    config: configSlice,
    cart: cartSlice,
    products: productsSlice,
    categories: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
