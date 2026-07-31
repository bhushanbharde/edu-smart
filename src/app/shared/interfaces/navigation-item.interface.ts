import { IconName } from "../types";

export interface NavigationItem {
  id: string;

  title: string;

  icon?: IconName;

  route?: string;

  expanded?: boolean;

  disabled?: boolean;

  badge?: string;

  children?: NavigationItem[];
}
