import { SidebarMenuItem } from './sidebar-menu-item.model';

export interface SidebarSection {
  id: string;
  title: string;
  items: SidebarMenuItem[];
}
