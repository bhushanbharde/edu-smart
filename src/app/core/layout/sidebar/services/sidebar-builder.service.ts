import { Injectable, signal } from '@angular/core';

import { SIDEBAR_SECTIONS } from '../config/sidebar.config';
import { SidebarSection } from '../models/sidebar-section.model';
import { SidebarMenuItem } from '../models/sidebar-menu-item.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarBuilderService {
  readonly sections = signal<SidebarSection[]>(SIDEBAR_SECTIONS);

  getSections(): SidebarSection[] {
    return this.sections();
  }

  setExpanded(id: string, expanded: boolean): void {
    const updateItems = (items: SidebarMenuItem[]): SidebarMenuItem[] =>
      items.map((item) => ({
        ...item,
        expanded: item.id === id ? expanded : item.expanded,
        children: item.children ? updateItems(item.children) : undefined,
      }));

    this.sections.update((sections) =>
      sections.map((section) => ({
        ...section,
        items: updateItems(section.items),
      })),
    );
  }

  collapseAll(): void {
    const collapseItems = (items: SidebarMenuItem[]): SidebarMenuItem[] =>
      items.map((item) => ({
        ...item,
        expanded: false,
        children: item.children ? collapseItems(item.children) : undefined,
      }));

    this.sections.update((sections) =>
      sections.map((section) => ({
        ...section,
        items: collapseItems(section.items),
      })),
    );
  }

  expandParents(_url: string): void {
    // We'll implement this in the next step.
  }
}
