import { createSlice } from "@reduxjs/toolkit";

// Initial state with default theme as 'light'
const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Toggle between light and dark themes
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

// Exporting the action and the reducer
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
