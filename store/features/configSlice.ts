import { createSlice } from "@reduxjs/toolkit";

interface ConfigInitialState {
  theme: "light" | "dark";
}

const initialState: ConfigInitialState = {
  theme: localStorage["theme"] || "light",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const nextTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);

      return {
        ...state,
        theme: nextTheme,
      };
    },
  },
});

export const { toggleTheme } = configSlice.actions;

export default configSlice.reducer;
