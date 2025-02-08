"use clinet";

import { ControlPanel, Content, Sidebar } from "@/components";

export default function Home() {
  return (
    <>
      <Sidebar />
      <ControlPanel />
      <Content />
    </>
  );
}
