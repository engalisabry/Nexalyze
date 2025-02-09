import { useTheme } from "@/lib/hooks/useTheme";
import { createStyles } from "@mantine/core";
import { iconsStuff } from "@/types";

import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from "@tabler/icons-react";

export const mainLinksMockData: iconsStuff = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" },
];

export const useSidebarStyles = createStyles((theme) => {
  const { colors } = useTheme();

  return {
    aside: {
      position: "relative",
      zIndex: 1000,
      width: "fit-content",
      flex: "0 0 30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginRight: "20px",
      backgroundColor: `${colors?.mainBg}`,

      "@media screen and (max-width: 567px)": {
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 100000,
        boxShadow: `3px 3px 7px 0 ${colors?.text}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "5%",
        width: "100%",
        height: "53px",
        overflow: "hidden",
        alignItems: "center",
      },
    },

    logo: {
      cursor: "pointer",
      boxSizing: "border-box",
      width: "100%",
      // display: "flex",
      // justifyContent: "center",
      display: "block",
      textAlign: "center",
      height: 60,
      paddingTop: theme.spacing.md,
      padding: "5px",
      marginBottom: theme.spacing.xl,
      img: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
      },

      span: {
        display: "inline-block",
        margin: "15px 0",

        "@media screen and (max-width: 567px)": {
          margin: "15px",
        },
      },

      "@media screen and (max-width: 567px)": {
        width: "15%",
        margin: 0,
        display: "flex",
        alignItems: "center",

        img: {
          width: "40px",
          height: "40px",
        },
      },
    },

    IconsWrapper: {
      marginTop: "25px",

      "@media screen and (max-width: 567px)": {
        display: "flex",
        justifyContent: "space-between",
        width: "75%",
        height: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        cursor: "grab",

        ".mantine-Tooltip-tooltip": {
          display: "none",
        },

        "&::-webkit-scrollbar": {
          height: "3px",
        },

        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },

        "&::-webkit-scrollbar-thumb": {
          background: `${colors?.gradient}`,
          borderRadius: "20px",
        },
      },
    },

    mainLink: {
      marginBottom: "25px",
      borderRadius: theme.radius.md,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: `${colors?.text}`,
      position: "relative",
      cursor: "grab",

      "&:focus, &:focus-within, &:focus-visible": {
        outline: "none",
      },

      "@media screen and (max-width: 567px)": {
        margin: 0,
        display: "block",
      },

      a: {
        color: `${colors?.text}`,
        width: "44px",
        height: "44px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "@media screen and (max-width: 567px)": {
          width: "53px",
        },
      },

      span: {
        display: "block",
        position: "absolute",
        top: 0,
        left: "-10px",
        width: "4px",
        height: "40px",

        "@media screen and (max-width: 567px)": {
          left: 0,
          width: "100%",
          height: "3px",
        },
      },

      "&:hover": {
        backgroundColor: `${colors?.activeLinkBg}`,
        color: `${colors.activeLinkTxt}`,
        a: {
          color: `${colors.activeLinkTxt}`,
        },
      },
    },

    mainLinkActive: {
      span: {
        backgroundColor: `${colors?.activeLinkBg}`,

        "@media screen and (max-width: 567px)": {
          background: `${colors?.gradient}`,
        },
      },

      "&::after": {
        position: "absolute",
        left: "-10px",
        top: 0,
        width: "1px",
        height: "100%",
        backgroundColor: `${colors?.text}`,
      },

      "&, &:hover": {
        backgroundColor: `${colors?.activeLinkBg}`,
        color: `${colors.activeLinkTxt}`,
        a: {
          color: `${colors.activeLinkTxt}`,
        },
      },
    },

    modalIcon: {},
  };
});
