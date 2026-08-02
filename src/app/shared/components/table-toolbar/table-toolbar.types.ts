import { IconName } from "../../types";

export interface TableToolbarAction {
  label: string;
  value: string;
  icon?: IconName;
  disabled?: boolean;
}
