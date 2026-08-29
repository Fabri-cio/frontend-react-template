import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  description?: string;
  children: ReactNode;
}

function FormField({
  label,
  htmlFor,
  error,
  description,
  children,
}: FormFieldProps) {
  const descriptionId = htmlFor ? `${htmlFor}-description` : undefined;
  const errorId = htmlFor ? `${htmlFor}-error` : undefined;

  const describedBy = error ? errorId : description ? descriptionId : undefined;

  const field =
    isValidElement(children) && describedBy
      ? cloneElement(
          children as ReactElement<{
            "aria-describedby"?: string;
            "aria-invalid"?: boolean;
          }>,
          {
            "aria-describedby": describedBy,
            "aria-invalid": Boolean(error),
          },
        )
      : children;

  return (
    <div className="space-y-2">
      {label ? (
        <label
          htmlFor={htmlFor}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      ) : null}

      {field}

      {description && !error ? (
        <p id={descriptionId} className="text-sm text-muted-foreground">
          {description}
        </p>
      ) : null}

      {error ? (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default FormField;
