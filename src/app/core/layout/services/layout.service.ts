import { Injectable, computed, signal } from '@angular/core';

import { BreadcrumbItem } from '../models/breadcrumb-item.model';
import { PageAction } from '../models/page-action.model';
import { PageHeader } from '../models/page-header.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  // ---------------------------------------------------------------------
  // Sidebar
  // ---------------------------------------------------------------------

  readonly sidebarCollapsed = signal(false);

  readonly mobileSidebarOpen = signal(false);

  // ---------------------------------------------------------------------
  // Theme
  // ---------------------------------------------------------------------

  readonly darkMode = signal(false);

  // ---------------------------------------------------------------------
  // Loading
  // ---------------------------------------------------------------------

  readonly loading = signal(false);

  // ---------------------------------------------------------------------
  // Header
  // ---------------------------------------------------------------------

  readonly pageHeader = signal<PageHeader>({
    title: '',
    subtitle: '',
    actions: [],
  });

  // ---------------------------------------------------------------------
  // Breadcrumb
  // ---------------------------------------------------------------------

  readonly breadcrumbs = signal<BreadcrumbItem[]>([]);

  // ---------------------------------------------------------------------
  // Computed
  // ---------------------------------------------------------------------

  readonly sidebarWidth = computed(() => (this.sidebarCollapsed() ? 72 : 280));

  // ---------------------------------------------------------------------
  // Sidebar
  // ---------------------------------------------------------------------

  toggleSidebar(): void {
    this.sidebarCollapsed.update((value) => !value);
  }

  collapseSidebar(): void {
    this.sidebarCollapsed.set(true);
  }

  expandSidebar(): void {
    this.sidebarCollapsed.set(false);
  }

  // ---------------------------------------------------------------------
  // Theme
  // ---------------------------------------------------------------------

  toggleTheme(): void {
    this.darkMode.update((value) => !value);
  }

  // ---------------------------------------------------------------------
  // Loading
  // ---------------------------------------------------------------------

  startLoading(): void {
    this.loading.set(true);
  }

  stopLoading(): void {
    this.loading.set(false);
  }

  // ---------------------------------------------------------------------
  // Header
  // ---------------------------------------------------------------------

  setPageHeader(header: PageHeader): void {
    this.pageHeader.set(header);
  }

  setTitle(title: string): void {
    this.pageHeader.update((header) => ({
      ...header,
      title,
    }));
  }

  setSubtitle(subtitle: string): void {
    this.pageHeader.update((header) => ({
      ...header,
      subtitle,
    }));
  }

  setActions(actions: PageAction[]): void {
    this.pageHeader.update((header) => ({
      ...header,
      actions,
    }));
  }

  clearActions(): void {
    this.setActions([]);
  }

  // ---------------------------------------------------------------------
  // Breadcrumb
  // ---------------------------------------------------------------------

  setBreadcrumbs(items: BreadcrumbItem[]): void {
    this.breadcrumbs.set(items);
  }

  clearBreadcrumbs(): void {
    this.breadcrumbs.set([]);
  }
}
