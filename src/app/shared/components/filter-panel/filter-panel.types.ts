export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterField {
  key: string;
  label: string;
  type: 'select' | 'text' | 'number';
  placeholder?: string;
  options?: FilterOption[];
}
