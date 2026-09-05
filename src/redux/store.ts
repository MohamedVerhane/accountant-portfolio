import { configureStore } from "@reduxjs/toolkit";
import localeReducer from "@/redux/slices/locale-slice";

export function createStore(preloadedState?: {
  locale: { locale: "ar" | "en" };
}) {
  return configureStore({
    reducer: {
      locale: localeReducer,
    },
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];