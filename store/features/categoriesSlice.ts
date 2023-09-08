import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    return await res.json();
  }
);

interface CategoriesInitialState {
  data: string[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: CategoriesInitialState = {
  data: [],
  isLoading: true,
  isError: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => ({
      ...state,
      isError: false,
      isLoading: true,
    }));

    builder.addCase(fetchCategories.rejected, (state) => ({
      ...state,
      isError: true,
      isLoading: false,
    }));

    builder.addCase(
      fetchCategories.fulfilled,
      (state, action: PayloadAction<string[]>) => ({
        ...state,
        data: action.payload,
        isError: false,
        isLoading: false,
      })
    );
  },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
