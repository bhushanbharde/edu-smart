import { IconName } from "../../types";

export interface TabItem {
  label: string;
  value: string;
  icon?: IconName;
  disabled?: boolean;
  badge?: string | number;
}
