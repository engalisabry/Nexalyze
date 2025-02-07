"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  UnstyledButton,
  Tooltip,
  ColorSchemeProvider,
  Modal,
} from "@mantine/core";
import { IconArrowAutofitRight, IconBoxModel } from "@tabler/icons-react";
import { one } from "@/assets";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { panelActions } from "@/store/slices";
import { useHandleTheme } from "@/styles/theme";
import { ThemeSwitcherBtn } from "@/components";
import {
  mainLinksMockData,
  useSidebarStyles,
} from "@/styles/components/sidebar";
import { Notes } from "@/components";

const MainLinks = () => {
  const pathname = usePathname();
  const { colorScheme } = useHandleTheme();
  const { classes, cx } = useSidebarStyles();
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <>
      {mainLinksMockData.map((link) => (
        <Tooltip
          key={link.label}
          color={colorScheme === "dark" ? "#00dcff" : "#000"}
          label={link.label}
          position="right"
          withArrow
          transitionDuration={0}
        >
          <UnstyledButton
            className={cx(classes.mainLink, {
              [classes.mainLinkActive]:
                pathname === `/${link.label.toLowerCase()}`,
            })}
          >
            <Link href={`/${link.label.toLowerCase()}`}>
              <link.icon stroke={1.5} />
            </Link>
          </UnstyledButton>
        </Tooltip>
      ))}

      <Tooltip
        label="Notes"
        color={colorScheme === "dark" ? "#00dcff" : "#000"}
        position="right"
        withArrow
        transitionDuration={0}
      >
        <span
          className={classes.mainLink}
          style={{ padding: "9px" }}
          onClick={() => setIsModalOpened(!isModalOpened)}
        >
          <IconBoxModel />
        </span>
      </Tooltip>

      <Modal opened={isModalOpened} onClose={() => setIsModalOpened(false)}>
        <Notes />
      </Modal>
    </>
  );
};

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
          <MainLinks />
          <ThemeSwitcherBtn />
        </div>
      </div>
    </ColorSchemeProvider>
  );
};

export default Sidebar;
