import { Injectable, signal } from '@angular/core';
import { SidebarMenuItem } from '../models/sidebar-menu-item.model';
import { SIDEBAR_MENU } from '../config/sidebar.config';

@Injectable({
  providedIn: 'root',
})
export class SidebarBuilderService {
  readonly menu = signal<SidebarMenuItem[]>(SIDEBAR_MENU);

  getMenu(): SidebarMenuItem[] {
    return this.menu();
  }

  setExpanded(id: string, expanded: boolean): void {
    const updateItems = (items: SidebarMenuItem[]): SidebarMenuItem[] =>
      items.map((item) => ({
        ...item,
        expanded: item.id === id ? expanded : item.expanded,
        children: item.children ? updateItems(item.children) : undefined,
      }));

    this.menu.set(updateItems(this.menu()));
  }

  filterByPermissions(permissions: string[]): void {
    const filterItems = (items: SidebarMenuItem[]): SidebarMenuItem[] =>
      items
        .filter(
          (item) => !item.permission || permissions.includes(item.permission),
        )
        .map((item) => ({
          ...item,
          children: item.children ? filterItems(item.children) : undefined,
        }));

    this.menu.set(filterItems(SIDEBAR_MENU));
  }

  reset(): void {
    this.menu.set(SIDEBAR_MENU);
  }
}
