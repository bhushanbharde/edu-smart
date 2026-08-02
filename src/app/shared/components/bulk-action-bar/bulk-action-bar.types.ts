import { IconName } from "../../types";

export interface BulkAction {
  label: string;
  value: string;
  icon?: IconName;
  variant?: 'default' | 'primary' | 'danger';
  disabled?: boolean;
}
