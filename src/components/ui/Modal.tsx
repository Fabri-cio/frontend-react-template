import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

function Modal({ open, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    previousActiveElement.current = document.activeElement as HTMLElement;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      dialogRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;

      previousActiveElement.current?.focus();
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
      onMouseDown={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        tabIndex={-1}
        className={[
          "relative z-10 w-full max-w-lg rounded-xl border",
          "bg-card p-6 text-card-foreground shadow-xl",
          "outline-none",
        ].join(" ")}
      >
        {title ? (
          <h2 id="modal-title" className="pr-8 text-lg font-semibold">
            {title}
          </h2>
        ) : null}

        <div className={title ? "mt-4" : ""}>{children}</div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className={[
            "absolute right-4 top-4 rounded-md p-1",
            "text-muted-foreground transition-colors",
            "hover:bg-secondary hover:text-foreground",
            "focus-visible:outline-none",
            "focus-visible:ring-2 focus-visible:ring-primary",
          ].join(" ")}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Modal;
