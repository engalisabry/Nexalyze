import { useTheme } from "@/lib/hooks/useTheme";
import { createStyles } from "@mantine/core";

export const useNotesStyles = createStyles(() => {
  const { colors } = useTheme();

  return {
    notesWrapper: {
      // backgroundImage: `${colors.gradient}`,
      margin: "25px 0",
      padding: "7px",
      height: "11%",
      overflowX: "hidden",

      "@media screen and (max-width: 567px)": {
        height: "30%",
      },

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
    },

    head: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "cursive",
      margin: "7px 0 15px",

      ".mantine-Input-wrapper": {
        width: "90%",

        "@media screen and (max-width: 567px)": {
          width: "80%",
        },

        input: {
          width: "100%",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderColor: `${colors.black}`,

          "&::placeholder": {
            color: `${colors.black}`,
          },
        },
      },

      span: {
        display: "inline-block",
        width: "10%",
        padding: "2px 5px",
        cursor: "pointer",
        backgroundColor: `${colors.activeLinkBg}`,
        color: `${colors.activeLinkTxt}`,

        "@media screen and (max-width: 567px)": {
          width: "20%",
        },
      },

      ".disable": {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },

    noteBody: {
      backgroundColor: "transparent",
      display: "flex",
      marginBottom: "15px",

      "div.text": {
        width: "90%",
        padding: "0 7px",
        backgroundColor: `${colors.activeLinkBg}`,
        color: `${colors.activeLinkTxt}`,
        display: "flex",
        alignItems: "center",
        border: `2px solid ${colors.bodyBg}`,
        wordBreak: "break-all",
      },

      span: {
        width: "10%",
        display: "flex",
        alignItems: "center",
        padding: "2px 5px",
        cursor: "pointer",
        border: `2px solid red`,
        color: `${colors.black}`,
      },
    },
  };
});
