import { IconName } from '../core/types';

export interface TableAction<T = unknown> {
  label: string;

  icon: IconName;

  color?: string;

  disabled?: (row: T) => boolean;

  action: (row: T) => void;
}
