import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface DropdownContextValue {
  close: (restoreFocus?: boolean) => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

function useDropdownContext() {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("DropdownItem must be used inside a Dropdown component.");
  }

  return context;
}

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
  className?: string;
}

interface DropdownItemProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  destructive?: boolean;
  className?: string;
}

interface DropdownSeparatorProps extends HTMLAttributes<HTMLDivElement> {}

function Dropdown({
  trigger,
  children,
  align = "right",
  className = "",
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const menuId = useId();

  const close = (restoreFocus = false) => {
    setOpen(false);

    if (restoreFocus) {
      requestAnimationFrame(() => {
        triggerRef.current?.focus();
      });
    }
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        close(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const classes = [
    "absolute z-40 mt-2 min-w-48",
    "rounded-lg border border-border",
    "bg-card p-1 text-card-foreground",
    "shadow-lg",
    align === "right" ? "right-0" : "left-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <DropdownContext.Provider value={{ close }}>
      <div ref={containerRef} className="relative inline-block">
        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={open ? menuId : undefined}
          onClick={() => setOpen((current) => !current)}
          className="contents"
        >
          {trigger}
        </button>

        {open && (
          <div id={menuId} role="menu" className={classes}>
            {children}
          </div>
        )}
      </div>
    </DropdownContext.Provider>
  );
}

function DropdownItem({
  children,
  onClick,
  destructive = false,
  disabled = false,
  className = "",
  ...props
}: DropdownItemProps) {
  const { close } = useDropdownContext();

  const classes = [
    "flex w-full items-center gap-2.5",
    "rounded-md px-3 py-2",
    "text-left text-sm",
    "transition-colors",
    "hover:bg-secondary",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    destructive ? "text-destructive" : "text-foreground",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (!event.defaultPrevented) {
      close(true);
    }
  };

  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      onClick={handleClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

function DropdownSeparator({
  className = "",
  ...props
}: DropdownSeparatorProps) {
  const classes = ["my-1 h-px bg-border", className].filter(Boolean).join(" ");

  return <div role="separator" className={classes} {...props} />;
}

export { Dropdown, DropdownItem, DropdownSeparator };

export default Dropdown;
