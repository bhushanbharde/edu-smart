import { IconName } from '../../../../shared/ui/display/icon/icon.types';

export interface SidebarMenuItem {
  id: string;
  title: string;

  icon: IconName;

  route?: string;

  badge?: string;

  permission?: string;

  expanded?: boolean;

  children?: SidebarMenuItem[];
}
