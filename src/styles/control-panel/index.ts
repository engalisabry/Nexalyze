import { useThemeConfig } from "@/hooks/useThemeConfig";
import { useAppSelector } from "@/store/hooks";
import { ColorScheme, createStyles } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";


export const useControlPanelStyles = createStyles(() => {
    const { colors } = useThemeConfig();
    const sliderValue = useAppSelector((state) => state.panel.sliderValueNumber);  
    const [ colorScheme ] = useLocalStorage<ColorScheme>({key: 'mantine-color-scheme'});

    return {
      
        hidePanel: {
            display: 'none',
            transition: 'transform .3s ease',
        },

        wrapper: {
            width: '37%',
            height: '97vh',
            padding: '15px 25px',
            backgroundColor: `${colors.mainBg}`,
            marginRight: '20px',
            transition: 'transform .3s ease',
        
            '@media screen and (max-width: 991px)': {
                width: '50%',
            },

            '@media screen and (max-width: 567px)': {
                width: '100%',
                margin: 0
            },
        },

        heading: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: `${colors.text}`,
            width: '100%',
            h3: {
                width: '60%',
                textTransform: 'capitalize',
                margin: 0
            },
            span: {
                fontWeight: 'bolder',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
        },

        chartsWrapper: {
            width: '150px',
            height: '150px',
            margin: '15px auto',
            overflow: 'hidden',
            padding: 0,
            borderRadius: '50%',
            background: `${colors.gradient}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,

            span: {
                position: 'absolute',
                zIndex: 5,
                width: '80%',
                height: '80%',
                borderRadius: '50%',
                backgroundColor: `${colors.bodyBg}`,
            },

            div: {
                width: '100% !important',
                height: '100% !important',
                position: 'relative',
                zIndex: 10,

                canvas: {
                    position: 'unset',
                },
            },
        },

    //    { /* Slider */ }

        sliderWrapper: {
            margin: '25px 0',
            background: `${colors.gradient}`,
            padding: '0 10px',
            height: '40px',
            borderRadius: '20px',
            boxShadow: '0 0 1px 1px rgb(255 255 255 / 30%)',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative', 

            ".mantine-Slider-bar": {
                backgroundColor: `${colorScheme === 'light' ? `${colors.black}` : `${colors.bodyBg}`}`,
            },

            "&::before, span": {
                content: '""',
                position: 'absolute',
                // left: '6%',
                top: 0,
                width: '3px',
                height: '5px',
                backgroundColor: `${colorScheme === 'light' ? `${colors.black}` : `${colors.bodyBg}`}`,
                display: 'block',
                zIndex: 1
            },

            "&::before": { 
                left: `${sliderValue}%`,
                top: '88%',
            },

            "span:first-of-type": {
                left: `${sliderValue}%`,
            },

            "span:nth-of-type(2)": {
                left: `${sliderValue}%`,
                top: '88%',
            },

            "span:last-of-type": {
                left: `${sliderValue}%`,
            }
        },

        slider: {
            color: `${colors.bodyBg}`,
            width: '100%',
        },

        thumb: {
            width: 30,
            height: 30,
            background: `${colors.mainBg}`,
            color: `${colors.text}`,
            position: 'relative',
            zIndex: 10,
        },
    }    
});     
