export type PageActionColor =
  'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface PageAction {
  id: string;

  label: string;

  icon?: string;

  color?: PageActionColor;

  disabled?: boolean;
}
    