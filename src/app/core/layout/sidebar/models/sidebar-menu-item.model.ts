import { SidebarBadge } from './badge.model';

export interface SidebarMenuItem {
  id: string;

  title: string;

  icon: string;

  route?: string;

  permission?: string;

  badge?: SidebarBadge;

  children?: SidebarMenuItem[];

  expanded?: boolean;

  hidden?: boolean;

  disabled?: boolean;

  divider?: boolean;

  external?: boolean;
}
