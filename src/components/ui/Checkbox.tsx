import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  error?: boolean;
}

function Checkbox({ error = false, className = "", ...props }: CheckboxProps) {
  const classes = [
    "size-4 shrink-0 appearance-none rounded border",
    "bg-background",
    "transition-colors",
    "checked:border-primary",
    "checked:bg-primary",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary/20",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "checked:before:block",
    "checked:before:text-center",
    "checked:before:text-xs",
    "checked:before:font-bold",
    "checked:before:text-primary-foreground",
    "checked:before:content-['✓']",
    error ? "border-destructive" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <input type="checkbox" className={classes} {...props} />;
}

export default Checkbox;
