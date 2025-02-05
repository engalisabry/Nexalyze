import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useThemeConfig } from '@/hooks/useThemeConfig';

const ThemeSwitcherBtn = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { colors }  = useThemeConfig();

  return (
    <ActionIcon
      variant="outline"
      style={{color: `${colors?.text}`, borderColor: `${colors?.text}`}}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );
};

export default ThemeSwitcherBtn;