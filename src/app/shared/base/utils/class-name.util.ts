export type CssClassValue = string | null | undefined | false;

export function cssClasses(...classes: CssClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}

export function cssClassesFromObject(classes: Record<string, boolean>): string {
  return Object.entries(classes)
    .filter(([, enabled]) => enabled)
    .map(([className]) => className)
    .join(' ');
}
