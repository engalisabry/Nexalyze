"use client";

import { Provider } from "react-redux";
import { store } from "../../store/store";
import { MantineProvider } from "@/components";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <MantineProvider>{children}</MantineProvider>
    </Provider>
  );
}
