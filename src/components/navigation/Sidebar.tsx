import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronLeft, Menu, X } from "lucide-react";

import {
  navigationItems,
  type NavigationItem,
} from "../../app/config/navigation";

interface SidebarProps {
  items?: NavigationItem[];
  title?: string;
  logo?: string;
}

export function Sidebar({
  items = navigationItems,
  title = "Frontend Template",
  logo = "F",
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Botón para móvil */}
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-md border bg-card p-2 text-foreground shadow-sm md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Fondo cuando el menú móvil está abierto */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex min-h-screen shrink-0 flex-col border-r bg-card",
          "transition-all duration-200",
          "md:sticky md:z-0",
          collapsed ? "w-16" : "w-64",
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Logo / título */}
        <div
          className={[
            "flex h-16 shrink-0 items-center border-b",
            collapsed
              ? "justify-center px-2"
              : "justify-between px-4",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div
            className={[
              "flex min-w-0 items-center",
              collapsed ? "justify-center" : "gap-3",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              {logo}
            </div>

            {!collapsed && (
              <span className="truncate font-semibold text-foreground">
                {title}
              </span>
            )}
          </div>

          {/* Cerrar menú móvil */}
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMobileMenu}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navegación */}
        <nav
          aria-label="Navegación principal"
          className="flex-1 overflow-y-auto p-3"
        >
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
                title={collapsed ? item.label : undefined}
                aria-disabled={item.disabled}
                onClick={(event) => {
                  if (item.disabled) {
                    event.preventDefault();
                    return;
                  }

                  closeMobileMenu();
                }}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    collapsed && "justify-center px-2",
                    item.disabled && "cursor-not-allowed opacity-50",
                    isActive && !item.disabled
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                {item.icon && (
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    {item.icon}
                  </span>
                )}

                {!collapsed && (
                  <span className="truncate">{item.label}</span>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Botón contraer */}
        <div className="border-t p-3">
          <button
            type="button"
            onClick={() => setCollapsed((current) => !current)}
            aria-label={collapsed ? "Expandir menú" : "Contraer menú"}
            className={[
              "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium",
              "text-muted-foreground transition-colors",
              "hover:bg-secondary hover:text-foreground",
              collapsed && "justify-center px-2",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <ChevronLeft
              className={[
                "h-5 w-5 shrink-0 transition-transform",
                collapsed && "rotate-180",
              ]
                .filter(Boolean)
                .join(" ")}
            />

            {!collapsed && <span>Contraer</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
