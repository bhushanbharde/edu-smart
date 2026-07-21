import { LucideIconData } from 'lucide-angular';

export interface NavigationItem {

    id: string;

    label: string;

    icon?: LucideIconData;

    route?: string;

    children?: NavigationItem[];

    badge?: string | number;

    permissions?: string[];

    expanded?: boolean;

    disabled?: boolean;

    hidden?: boolean;

}