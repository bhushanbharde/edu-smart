export interface TableColumn<T = unknown> {
  field: keyof T | string;

  header: string;

  sortable?: boolean;

  filterable?: boolean;

  width?: string;

  sticky?: boolean;

  hidden?: boolean;
}
