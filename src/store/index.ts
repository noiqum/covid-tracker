import { type Action, configureStore, combineReducers } from "@reduxjs/toolkit";
import { themeSlice } from "./themeSlice";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { rootSaga } from "./sagas";
import { totalSlice } from "./totalSlice";
import { tooltipSlice } from "./tooltipSlice";
import { contentSlice } from "./contentSlice";

const appReducer = combineReducers({
  theme: themeSlice.reducer,
  total: totalSlice.reducer,
  tooltip: tooltipSlice.reducer,
  content: contentSlice.reducer,
});
const rootReducer = (
  state: any,
  action: Action
): ReturnType<typeof appReducer> => {
  return appReducer(state, action);
};

export function setupStore(preloadedState?: Partial<RootState>) {
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);
  return store;
}
export const store = setupStore({});
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
