import type { HTMLAttributes } from "react";

type AlertVariant = "default" | "success" | "destructive";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

const variantClasses: Record<AlertVariant, string> = {
  default: "bg-muted text-foreground",
  success: "bg-success text-success-foreground",
  destructive: "bg-destructive text-destructive-foreground",
};

function Alert({ variant = "default", className = "", ...props }: AlertProps) {
  const classes = [
    "w-full rounded-lg border p-4",
    "text-sm",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div role="alert" className={classes} {...props} />;
}

export default Alert;
