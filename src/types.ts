import { TablerIcon } from "@tabler/icons";
import { EChartsOption, SetOptionOpts } from "echarts";
import { CSSProperties } from "react";
import { ECharts } from "echarts";

export type iconsStuff = {
    label: string,
    icon: TablerIcon,
    fetchUrl?: string,
    active?: boolean
}[];

export type NoteData = {
    id: string,
    text: string
}[];


export interface NotesSlice {
    noteData: NoteData
}

export interface ControlPanelSliceTypes {
    isVisibleStatus: boolean,
    sliderValueNumber: number,
    sourceBoxData: {
        label: string,
    }
}

export interface ReactEChartsProps {
    options: EChartsOption;
    style?: CSSProperties;
    settings?: SetOptionOpts;
    loading?: boolean;
    eCharts?: ECharts;
    theme?: "light" | "dark";
}

export interface allThemeConfig {
    colors: {
        bodyBg: string,
        mainBg: string,
        activeLinkBg: string,
        activeLinkTxt: string,
        text: string,
        gradient: string,
        mChart: String,
        black: String,
        white: String
    }
}



