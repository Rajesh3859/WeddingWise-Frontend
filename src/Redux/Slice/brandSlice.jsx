import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  trendingBrands: [],
  serviceToday: [],
};

const brandSlice = createSlice({
  name: "Brands",
  initialState,
  reducers: {
    saveBrands: (state, action) => {
      if (action.payload) {
        state.data = action.payload;
        state.trending = action.payload.filter(
          (data) => data.generalDetails.trending
        );
        state.servingToday = action.payload.filter(
          (data) => data.generalDetails.isOpen
        );
      }
    },
  },
});

// Export the reducer
export const { saveBrands } = brandSlice.actions;
export default brandSlice.reducer;
