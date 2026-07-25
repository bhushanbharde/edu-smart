
export interface MenuItem {
  id: string;

  label: string;

  route?: string;

  disabled?: boolean;

  children?: MenuItem[];
}
