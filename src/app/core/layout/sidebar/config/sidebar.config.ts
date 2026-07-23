import { DASHBOARD_MENU } from './dashboard.menu';
import { STUDENT_MENU } from './students.menu';
import { SidebarMenuItem } from '../models/sidebar-menu-item.model';

export const SIDEBAR_MENU: SidebarMenuItem[] = [
  ...DASHBOARD_MENU,

  ...STUDENT_MENU,
];
