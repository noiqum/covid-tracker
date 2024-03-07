import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { themeSlice } from "./themeSlice";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { rootSaga } from "./sagas";
import { totalSlice } from "./totalSlice";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  total: totalSlice.reducer,
});

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(sagaMiddleware);
    },
  });
}
export const store = setupStore({});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
