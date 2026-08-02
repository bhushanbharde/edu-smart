import { IconName } from '../../types';

export interface TableColumn<T = any> {
  key: string;
  label: string;

  width?: string;

  sortable?: boolean;

  visible?: boolean;

  align?: 'left' | 'center' | 'right';

  type?: 'text' | 'number' | 'date' | 'status' | 'avatar';

  getValue?: (row: T) => unknown;
}

export interface TableAction<T = any> {
  label: string;
  value: string;

  icon?: IconName;

  variant?: 'default' | 'primary' | 'danger';

  disabled?: (row: T) => boolean;
}

export interface TableFilter {
  key: string;
  value: unknown;
}
