import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";
import type { allThemeConfig } from "@/types";

export const useTheme = () => {
  const [scheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
  });
  const [themeConfig, setThemeConfig] = useState<allThemeConfig>(
    {} as allThemeConfig
  );

  const isDrakMode = scheme === "dark";

  useEffect(() => {
    setThemeConfig({
      colors: {
        bodyBg: isDrakMode ? "#13181f" : "#f1f1f1",
        mainBg: isDrakMode ? "#171c26" : "#f9f9f9",
        activeLinkBg: isDrakMode ? "#00dcff" : "#000",
        activeLinkTxt: "#fff",
        text: isDrakMode ? "#fff" : "#000",
        gradient: isDrakMode
          ? "linear-gradient(90deg, #fdb17a 0%, #b9a2de 100%)"
          : "linear-gradient(135deg, #ba5370 0%, #f4e2d8 100%)",
        mChart: isDrakMode ? "#6e00ff" : "#000",
        black: "#000",
        white: "#fff",
      },
    });
  }, [isDrakMode]);

  return {
    colors: themeConfig.colors || {},
  };
};
