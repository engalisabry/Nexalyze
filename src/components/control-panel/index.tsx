
import { useControlPanelStyles } from '@/styles/control-panel';
import { Slider } from '@mantine/core';
import { IconPlayerPause } from '@tabler/icons';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { panelActions } from '@/features/slices';
import { IconCircleChevronsLeft } from '@tabler/icons';
import { EchartsOptions }from '@/features/EchartsOptions';
import { ReactECharts, SourceBoxes } from '@/components';

const ControlPanel = () => {
    const dispatch = useAppDispatch();
    const options = EchartsOptions();
    const { classes } = useControlPanelStyles();
    const { changeSliderValueNumber, switchVisibleStatus } = panelActions;
   
    const isPanelVisible = useAppSelector((state) => state.panel.isVisibleStatus);
    const sliderValue = useAppSelector((state) => state.panel.sliderValueNumber);    

    return (
        <div className={isPanelVisible ? classes.wrapper : classes.hidePanel}>
            <div className={classes.heading}>
                <h3>control panel</h3>
                <span title="hide panel" onClick={()=> dispatch(switchVisibleStatus())}><IconCircleChevronsLeft /> ⊙⊙⊙</span>
            </div>
            
            {/* Echarts */}
            <div className={classes.chartsWrapper}>
                <ReactECharts options={options} />
                <span />
            </div>
            
            {/* Slider */}
            <div className={classes.sliderWrapper}>
                <span /> <span /> <span /> {/* Make Charts Inside The Slider*/}
                <Slider
                    color="slider"
                    thumbSize={50}
                    thumbChildren={<IconPlayerPause size={16} />}
                    max={100}
                    step={25}
                    min={0}
                    label={null}
                    value={sliderValue}
                    onChange={(e)=> dispatch(changeSliderValueNumber(e))}
                    size="xl"
                    radius="xl"
                    className={classes.slider}
                    classNames={{ thumb: classes.thumb }}
                />
            </div>

            {/* Sources */}

            <SourceBoxes />

            {/* Notes */}

            {/* <Notes /> */}

        </div>
    )
}

export default ControlPanel;