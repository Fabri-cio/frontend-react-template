export function cn(
  ...classes: Array<string | false | null | undefined | string[]>
) {
  return classes.flat().filter(Boolean).join(" ");
}
