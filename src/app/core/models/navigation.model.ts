
export interface NavigationItem {

    id: string;

    label: string;

    icon?: string;

    route?: string;

    children?: NavigationItem[];

    badge?: string | number;

    permissions?: string[];

    expanded?: boolean;

    disabled?: boolean;

    hidden?: boolean;

}