export interface PageAction {
  label: string;

  icon?: string;

  color?: 'primary' | 'accent' | 'warn';

  disabled?: boolean;

  loading?: boolean;

  visible?: boolean;

  action: () => void;
}
