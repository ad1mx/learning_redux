import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category?: string | false) => {
    const res = await fetch(
      `https://fakestoreapi.com/products${
        category ? `/category/${category}` : ""
      }`
    );
    return await res.json();
  }
);

export interface Product {
  id: number;
  category: string;
  description: string;
  title: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
}

interface ProductsInitialState {
  data: Product[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ProductsInitialState = {
  data: [],
  isLoading: true,
  isError: false,
};

const productsSlice = createSlice({
  name: "prodcuts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => ({
      ...state,
      isError: false,
      isLoading: true,
    }));

    builder.addCase(fetchProducts.rejected, (state) => ({
      ...state,
      isError: true,
      isLoading: false,
    }));

    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => ({
        ...state,
        data: action.payload,
        isError: false,
        isLoading: false,
      })
    );
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
