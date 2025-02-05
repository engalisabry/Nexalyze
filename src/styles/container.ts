import { useThemeConfig } from "@/hooks/useThemeConfig";
import { createStyles } from "@mantine/core";

export const useContainerStyles = createStyles(() => {
    const { colors } = useThemeConfig();

    return {
        wrapper: {
            display: 'flex',
            margin: 0,
            height: '100vh !important',
            paddingLeft: 0,
            maxWidth: '100% !important',
            backgroundColor: `${colors?.bodyBg}`,
            color: `${colors?.text}`
        },
    }
});