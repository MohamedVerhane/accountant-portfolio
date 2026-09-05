"use client";

import * as React from "react";
import { Provider } from "react-redux";
import { createStore, type AppStore } from "@/redux/store";
import type { Locale } from "@/redux/slices/locale-slice";

function ReduxProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [store] = React.useState<AppStore>(() =>
    createStore({ locale: { locale: initialLocale } })
  );
  return <Provider store={store}>{children}</Provider>;
}

export { ReduxProvider };