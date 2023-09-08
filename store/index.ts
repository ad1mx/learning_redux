import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import productsSlice from "./features/productsSlice";
import categoriesSlice from "./features/categoriesSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    categories: categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
