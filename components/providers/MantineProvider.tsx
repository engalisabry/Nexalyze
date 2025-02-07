"use client";

import { MantineProvider as Mantine } from "@mantine/core";

export default function MantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Mantine>{children}</Mantine>;
}
