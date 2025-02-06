"use client";
import { useTheme } from "@/lib/hooks/use-theme";
import { ColorSchemeProvider, Container, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { useContainerStyles } from "@/styles/components/container";
import { useHandleTheme } from "@/styles/theme";

const Layout = ({ children }: { children: ReactNode }) => {
  const { classes } = useContainerStyles();
  const { colors } = useTheme();
  const { colorScheme, toggleColorScheme } = useHandleTheme();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colors: {
            slider: [colors?.mainBg],
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Container className={classes.wrapper} size="sm">
          {children}
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Layout;
