import { Outlet } from "react-router-dom";

import { Header } from "../../components/navigation/Header";
import { Sidebar } from "../../components/navigation/Sidebar";

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          title="Frontend Template"
          search
          searchPlaceholder="Buscar..."
        />

        <main className="min-w-0 flex-1 overflow-x-hidden bg-background p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
