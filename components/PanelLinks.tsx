import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UnstyledButton, Tooltip, Modal } from "@mantine/core";
import { IconBoxModel } from "@tabler/icons-react";
import {
  mainLinksMockData,
  useSidebarStyles,
} from "@/styles/components/sidebar";
import { Notes } from "@/components";
import { useHandleTheme } from "@/styles/theme";

const PanelLinks = () => {
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

export default PanelLinks;
