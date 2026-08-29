import { useEffect, useRef, useState, type ReactNode } from "react";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
}

interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
  destructive?: boolean;
  disabled?: boolean;
}

function Dropdown({ trigger, children, align = "right" }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <div
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {trigger}
      </div>

      {open ? (
        <div
          role="menu"
          className={[
            "absolute z-40 mt-2 min-w-48 rounded-lg border",
            "bg-card p-1 text-card-foreground shadow-lg",
            align === "right" ? "right-0" : "left-0",
          ].join(" ")}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function DropdownItem({
  children,
  onClick,
  destructive = false,
  disabled = false,
}: DropdownItemProps) {
  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      onClick={onClick}
      className={[
        "flex w-full items-center rounded-md px-3 py-2",
        "text-left text-sm",
        "transition-colors",
        "hover:bg-secondary",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-primary",
        "disabled:pointer-events-none",
        "disabled:opacity-50",
        destructive ? "text-destructive" : "text-foreground",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}

export { Dropdown, DropdownItem };
