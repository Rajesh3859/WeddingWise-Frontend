import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  loading: false,
  error: null,
  userData: null, // Assuming you have user data in your state
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart(state) {
      state.loading = true;
      state.error = null;
    },
    signInSuccess(state, action) {
      state.loading = false;
      state.userData = action.payload; // Assume payload contains user data
    },
    signInFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    signOutSuccess(state) {
      state.userData = null; // Reset user data on sign out
      state.error = null; // Optionally clear the error
    },
  },
});

// Memoized selectors
export const selectUserState = (state) => state.user || {};

export const selectLoading = createSelector(
  [selectUserState],
  (user) => user.loading || false
);

export const selectError = createSelector(
  [selectUserState],
  (user) => user.error || null
);

export const selectCurrentUser = createSelector(
  [selectUserState],
  (user) => user.userData || null
);

// Export actions and reducer
export const { signInStart, signInSuccess, signInFailure, signOutSuccess } =
  userSlice.actions;
export default userSlice.reducer;
