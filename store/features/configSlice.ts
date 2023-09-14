import { createSlice } from "@reduxjs/toolkit";

interface ConfigInitialState {
  theme: "light" | "dark";
}

const initialState: ConfigInitialState = {
  theme: "light",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    toggleTheme: (state) => ({
      ...state,
      theme: state.theme === "light" ? "dark" : "light",
    }),
  },
});

export const { toggleTheme } = configSlice.actions;

export default configSlice.reducer;
