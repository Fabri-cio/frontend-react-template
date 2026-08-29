import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

function Input({
  error = false,
  className = "",
  ...props
}: InputProps) {
  const classes = [
    "h-10 w-full rounded-md border bg-background px-3",
    "text-sm text-foreground",
    "placeholder:text-muted-foreground",
    "outline-none",
    "transition-colors",
    "focus:border-primary",
    "focus:ring-2",
    "focus:ring-primary/20",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    error
      ? "border-destructive focus:border-destructive focus:ring-destructive/20"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <input className={classes} {...props} />;
}

export default Input;