import type { ReactNode } from "react";

import Header from "../../components/navigation/Header";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>{children}</main>
    </div>
  );
}

export default AppLayout;
