import { useThemeConfig } from "@/hooks/useThemeConfig";
import { ColorSchemeProvider, Container, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';
import { useContainerStyles } from '@/styles/container';
import { handleTheme } from '@/Theme/handleTheme';

const Layout = ({ children }: {children: ReactNode}) => {

    const { classes } = useContainerStyles();
    const { colors } = useThemeConfig();
    const { colorScheme, toggleColorScheme } = handleTheme();

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                theme={{
                    colors: {
                        'slider': [colors?.mainBg]
                    }
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Container className={classes.wrapper} size="sm">
                    {children}
                </Container>
            </MantineProvider>
        </ColorSchemeProvider>
    )

};

export default Layout;