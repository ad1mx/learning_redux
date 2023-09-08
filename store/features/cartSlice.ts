import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";

export interface CartProdcut extends Product {
  quantity: number;
}

const initialState = [] as CartProdcut[];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (cart, action: PayloadAction<Product>) => {
      const existedProduct = cart.find((item) => item.id === action.payload.id);

      if (existedProduct) {
        return cart.map((item) =>
          item.id === existedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { ...action.payload, quantity: 1 }];
      }
    },

    removeFromCart: (cart, action: PayloadAction<number>) =>
      cart.filter((item) => item.id !== action.payload),
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
