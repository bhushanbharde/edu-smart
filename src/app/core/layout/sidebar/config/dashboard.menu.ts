import { APP_ICONS } from '../../../../shared/ui/display/icon/icon.registry';
import { SidebarMenuItem } from '../models/sidebar-menu-item.model';

export const DASHBOARD_MENU: SidebarMenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: APP_ICONS.dashboard,
    route: '/dashboard',
  },
];
