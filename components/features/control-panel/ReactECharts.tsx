"use client";
import { useRef, useEffect, JSX } from "react";
import { init, getInstanceByDom } from "echarts";
import { ReactEChartsProps } from "@/types";

function ReactECharts({
  options,
  style,
  settings,
  loading,
  theme,
}: ReactEChartsProps): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ReactEChartsProps["eCharts"] | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener("resize", resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(options, settings);
    }
  }, [options, settings, theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (loading) {
        chart?.showLoading();
      } else {
        chart?.hideLoading();
      }
    }
  }, [loading, theme]);

  return (
    <div ref={chartRef} style={{ width: "500px", height: "300px", ...style }} />
  );
}

export default ReactECharts;
