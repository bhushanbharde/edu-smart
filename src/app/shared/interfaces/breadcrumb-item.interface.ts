import { IconName } from "../types";

export interface BreadcrumbItem {
  label: string;

  route?: string;

  icon?: IconName;

  disabled?: boolean;
}
