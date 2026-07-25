import { IconName } from "../../ui/display/icon";

export interface SelectOption<T = any> {
  label: string;

  value: T;

  icon?: IconName;

  disabled?: boolean;

  description?: string;
}
