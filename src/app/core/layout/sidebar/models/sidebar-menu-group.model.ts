import { SidebarMenuItem } from './sidebar-menu-item.model';

export interface SidebarMenuGroup {
  id: string;

  title: string;

  items: SidebarMenuItem[];
}
