import { Home, Info, Settings } from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const navigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Inicio",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    id: "about",
    label: "Acerca de",
    href: "/about",
    icon: <Info className="h-5 w-5" />,
  },
  {
    id: "settings",
    label: "Configuración",
    href: "/settings",
    icon: <Settings className="h-5 w-5" />,
  },
];
