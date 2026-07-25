import { IconName } from '../core/types';

export interface MenuItem {
  id: string;

  label: string;

  icon?: IconName;

  route?: string;

  url?: string;

  disabled?: boolean;

  badge?: string;

  children?: MenuItem[];
}
