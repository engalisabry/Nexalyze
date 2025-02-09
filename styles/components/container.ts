import { useTheme } from "@/lib/hooks/useTheme";
import { createStyles } from "@mantine/core";

export const useContainerStyles = createStyles(() => {
  const { colors } = useTheme();

  return {
    wrapper: {
      display: "flex",
      margin: 0,
      height: "100vh !important",
      paddingLeft: 0,
      maxWidth: "100% !important",
      backgroundColor: `${colors?.bodyBg}`,
      color: `${colors?.text}`,
    },
  };
});
