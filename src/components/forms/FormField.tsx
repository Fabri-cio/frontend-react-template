import {
  cloneElement,
  isValidElement,
  useId,
  type ReactElement,
  type ReactNode,
} from "react";

interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  error?: string;
  description?: string;
  children: ReactNode;
  required?: boolean;
  className?: string;
}

function FormField({
  label,
  htmlFor,
  error,
  description,
  children,
  required = false,
  className = "",
}: FormFieldProps) {
  const generatedId = useId();

  const fieldId = htmlFor || `field-${generatedId}`;

  const descriptionId = description ? `${fieldId}-description` : undefined;

  const errorId = error ? `${fieldId}-error` : undefined;

  const describedBy =
    [descriptionId, errorId].filter(Boolean).join(" ") || undefined;

  const field =
    isValidElement(children) && describedBy
      ? cloneElement(
          children as ReactElement<{
            id?: string;
            "aria-describedby"?: string;
            "aria-invalid"?: boolean;
          }>,
          {
            id: htmlFor || undefined,
            "aria-describedby": describedBy,
            "aria-invalid": Boolean(error),
          },
        )
      : children;

  const classes = ["space-y-2", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-sm font-medium text-foreground"
        >
          {label}

          {required && (
            <span aria-hidden="true" className="ml-1 text-destructive">
              *
            </span>
          )}
        </label>
      )}

      {field}

      {description && (
        <p id={descriptionId} className="text-sm text-muted-foreground">
          {description}
        </p>
      )}

      {error && (
        <p id={errorId} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;
