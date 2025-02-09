import { ControlPanel, Content, Sidebar } from "@/components";

export default function Home() {
  return (
    <AppLayout>
      <Content />
    </AppLayout>
  );
}

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <Providers>
    //   <MantineProvider>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <ControlPanel />
        {children}
      </div>
    </div>
    //   </MantineProvider>
    // </Providers>
  );
};
