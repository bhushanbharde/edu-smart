export interface TableColumn<T> {
  field: keyof T;

  header: string;

  sortable?: boolean;

  width?: string;

  align?: 'left' | 'center' | 'right';
}
