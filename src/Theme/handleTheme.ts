import { ColorScheme } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";


export const handleTheme = () => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'dark',
        getInitialValueInEffect: false,
    });

    const toggleColorScheme = (Value?: ColorScheme) => setColorScheme(Value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);
    
    return {
        colorScheme,
        toggleColorScheme
    }
};
