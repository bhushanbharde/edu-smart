import { IconName } from "../../types";

export interface StepperItem {
  label: string;
  description?: string;
  icon?: IconName;
  disabled?: boolean;
  error?: boolean;
}
