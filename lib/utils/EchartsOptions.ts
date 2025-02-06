import { useAppSelector } from "@/store/hooks";
import { useTheme } from "@/lib/hooks/use-theme";
import { EChartsOption, SetOptionOpts } from "echarts";
import { CSSProperties } from "react";

interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: "light" | "dark";
}

export function EchartsOptions() {
  const { colors } = useTheme();
  const SliderValueNumber = useAppSelector(
    (state) => state.panel.sliderValueNumber
  );
  const levelNumber = SliderValueNumber / 25;

  const options: ReactEChartsProps["option"] = {
    series: [
      {
        type: "gauge",
        pointer: {
          show: false,
        },
        startAngle: -90,
        endAngle: 270,
        color: `${colors?.mChart}`,
        progress: {
          show: true,
          width: 5,
          clip: true,
          roundCap: true,
          itemStyle: {
            borderCap: "square",
          },
        },
        axisLine: {
          lineStyle: {
            width: -12,
            color: [
              [0.3, "transparent"],
              [0.7, "transparent"],
              [1, "transparent"],
            ],
          },
        },
        axisTick: {
          show: true,
          length: 5,
        },
        splitLine: {
          length: 5,
          lineStyle: {
            width: 1,
            color: "#999",
          },
        },
        axisLabel: {
          show: false,
          distance: 50,
          color: "#ff0",
          fontSize: 20,
        },
        anchor: {
          show: false,
          showAbove: false,
          size: 20,
          itemStyle: {
            borderWidth: 10,
          },
        },
        title: {
          show: true,
          fontSize: 10,
          color: `${colors?.text}`,
        },
        detail: {
          valueAnimation: true,
          fontSize: 15,
          align: "center",
          offsetCenter: [0, "-20%"],
          formatter: "{value}°C",
          color: `${colors?.text}`,
        },

        data: [
          {
            value: SliderValueNumber,
            name: `Level ${levelNumber}`,
          },
        ],
      },
    ],
  };

  return options;
}
