import { IconName } from "../../types";

export interface TableColumn<T = any> {
  key: keyof T | string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  visible?: boolean;
  icon?: IconName;
}

export interface TableSort {
  key: string;
  direction: 'asc' | 'desc';
}

export interface TableAction<T = any> {
  label: string;
  value: string;
  icon?: IconName;
  danger?: boolean;
  disabled?: boolean;
  visible?: boolean | ((row: T) => boolean);
}

export interface TableRowAction<T = any> {
  row: T;
  action: TableAction<T>;
}
