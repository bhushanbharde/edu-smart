import { IconName } from '../../types';

export interface SelectOption<T = any> {
  value: T;
  label: string;

  description?: string;
  icon?: IconName;

  disabled?: boolean;
}
