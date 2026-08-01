import { IconName } from "../types";

export interface MenuItem {
  label: string;
  value?: string;
  icon?: IconName;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
  shortcut?: string;
  children?: MenuItem[];
}
