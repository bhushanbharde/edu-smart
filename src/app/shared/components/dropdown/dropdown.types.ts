import { IconName } from '../../../shared/types/icon-name.type';

export interface DropdownItem {
  label: string;
  value: string;
  icon?: IconName;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
}

export type DropdownPosition =
  'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
