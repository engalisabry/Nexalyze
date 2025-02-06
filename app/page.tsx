"use client";
import { ControlPanel, Content } from "@/components";
import { useAppSelector } from "@/store/hooks";

export default function Home() {
  const { isVisibleStatus } = useAppSelector((state) => state.panel);
  console.log(isVisibleStatus);
  return (
    <>
      <ControlPanel />
      <Content />
    </>
  );
}
