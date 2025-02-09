"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { MantineProvider } from "@mantine/core";
import dynamic from "next/dynamic";

const App = dynamic(() => import("@/app"), { ssr: false });

export function ClientOnly() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </Provider>
  );
}
