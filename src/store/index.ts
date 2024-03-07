import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { themeSlice } from "./themeSlice";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export const store = setupStore({});
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
