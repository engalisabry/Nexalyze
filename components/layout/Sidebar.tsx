import Image from "next/image";
import { ColorSchemeProvider } from "@mantine/core";
import { IconArrowAutofitRight } from "@tabler/icons-react";
import { one } from "@/assets";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { useAppDispatch } from "@/lib/hooks/useAppDispatch";
import { panelActions } from "@/store/slices";
import { useHandleTheme } from "@/styles/theme";
import { ThemeSwitcherBtn } from "@/components";
import { useSidebarStyles } from "@/styles/components/sidebar";
import { PanelLinks } from "@/components";

const Sidebar = () => {
  const { classes } = useSidebarStyles();
  const { colorScheme, toggleColorScheme } = useHandleTheme();
  const dispatch = useAppDispatch();
  const isPanelVisible = useAppSelector((state) => state.panel.isVisibleStatus);
  const { switchVisibleStatus } = panelActions;

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <div className={classes.aside}>
        <div className={classes.logo} title="profile">
          <Image width={100} height={100} src={one} alt="avatar1" />
          <span title="show panel">
            {!isPanelVisible && (
              <IconArrowAutofitRight
                onClick={() => dispatch(switchVisibleStatus())}
              />
            )}
          </span>
        </div>
        <div className={classes.IconsWrapper}>
          <PanelLinks />
          <ThemeSwitcherBtn />
        </div>
      </div>
    </ColorSchemeProvider>
  );
};

export default Sidebar;
