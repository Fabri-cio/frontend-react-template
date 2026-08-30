import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";
import Button from "../ui/Button";

function Header() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="border-b bg-card">
      <div className="container">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <NavLink to="/" onClick={closeMenu} className="font-semibold">
            Frontend Template
          </NavLink>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="rounded-md p-2 text-foreground hover:bg-secondary md:hidden"
          >
            <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
          </button>

          <div className="hidden items-center gap-4 md:flex">
            <nav className="flex items-center gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  ].join(" ")
                }
              >
                Inicio
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  ].join(" ")
                }
              >
                Sobre nosotros
              </NavLink>
            </nav>

            <ThemeButtons theme={theme} setTheme={setTheme} />
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-2 text-sm font-medium",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  ].join(" ")
                }
              >
                Inicio
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-2 text-sm font-medium",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  ].join(" ")
                }
              >
                Sobre nosotros
              </NavLink>
            </nav>

            <div className="mt-4 flex flex-wrap gap-2">
              <ThemeButtons theme={theme} setTheme={setTheme} />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

interface ThemeButtonsProps {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
}

function ThemeButtons({ theme, setTheme }: ThemeButtonsProps) {
  return (
    <>
      <Button
        variant={theme === "light" ? "primary" : "secondary"}
        size="sm"
        onClick={() => setTheme("light")}
      >
        Light
      </Button>

      <Button
        variant={theme === "dark" ? "primary" : "secondary"}
        size="sm"
        onClick={() => setTheme("dark")}
      >
        Dark
      </Button>

      <Button
        variant={theme === "system" ? "primary" : "secondary"}
        size="sm"
        onClick={() => setTheme("system")}
      >
        System
      </Button>
    </>
  );
}

export default Header;
