"use client";

import { MantineProvider } from "@mantine/core";
import { Providers } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <title>Nexalze</title>
        <meta name="description" content="Nexalze" />
      </head>
      <body>
        <Providers>
          <MantineProvider>{children}</MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
