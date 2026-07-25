export type BadgeColor =
  'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

export interface SidebarBadge {
  text: string;
  color: BadgeColor;
}
