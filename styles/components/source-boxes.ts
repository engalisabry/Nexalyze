import { useThemeConfig } from "@/lib/hooks/useTheme";
import { createStyles } from "@mantine/core";

export const useControlPanelBoxesStyles = createStyles(() => {
  const { colors } = useThemeConfig();

  return {
    resourcesBoxWrapper: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "10px",
      height: "57%",
      overflowX: "hidden",
      padding: "0 7px",

      "&::-webkit-scrollbar": {
        height: "3px",
        width: "5px",
      },

      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },

      "&::-webkit-scrollbar-thumb": {
        background: `${colors?.gradient}`,
        borderRadius: "20px",
      },

      "@media screen and (max-width: 567px)": {
        height: "30%",
      },

      div: {
        width: "calc(100% / 2 - 10px)",
        padding: "15px 7px",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: "5px",
        boxShadow: `0 0 25px ${colors.bodyBg}`,
        border: `2px solid ${colors.text}`,
        textTransform: "capitalize",

        "@media screen and (max-width: 567px)": {
          width: "100%",
        },

        span: {
          display: "inline-block",
          marginRight: "5px",
        },

        "&.active": {
          backgroundColor: `${colors.activeLinkBg}`,
          color: `${colors.activeLinkTxt}`,
          borderColor: "transparent",
        },

        // "span:first-of-type": {

        // },

        // "span:nth-of-type(2)": {

        // },

        // "span:last-of-type": {

        // },
      },
    },
  };
});
