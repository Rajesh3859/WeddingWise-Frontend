import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slice/themeSlice"; // Only import the themeReducer
import storage from "redux-persist/lib/storage";
import userReducer from "./Slice/userSlice";
import { persistReducer, persistStore } from "redux-persist";

// Combine reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer, // Use the themeReducer directly
});

// Configure persistence
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

// Create a persistor
export const persistor = persistStore(store);
