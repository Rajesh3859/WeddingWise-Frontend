import { combineReducers, configureStore } from "@reduxjs/toolkit";
import useReducer from "./Slice/themeSlice";
import themeReducer from "./Slice/themeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
    user: useReducer,
    theme: themeReducer
})

const persistConfig = {
    key: "root",
    storage,
    version:1
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    },
});

export const persistor = persistStore(store);