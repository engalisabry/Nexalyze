import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useTheme } from "@/lib/hooks/use-theme";

const ThemeSwitcherBtn = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { colors } = useTheme();

  return (
    <ActionIcon
      variant="outline"
      style={{ color: `${colors?.text}`, borderColor: `${colors?.text}` }}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {colorScheme === "dark" ? (
        <IconSun size={18} />
      ) : (
        <IconMoonStars size={18} />
      )}
    </ActionIcon>
  );
};

export default ThemeSwitcherBtn;
