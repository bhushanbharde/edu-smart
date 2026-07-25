import { Injectable, computed, inject, signal } from '@angular/core';

import { ThemeService } from '../services/theme/theme.service';
import { FullscreenService } from '../services/fullscreen/fullscreen.service';
import { ViewportService } from '../services/viewport/viewport.service';
import { Breadcrumb } from '../models/breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutStore {
  private readonly theme = inject(ThemeService);

  private readonly fullscreen = inject(FullscreenService);

  readonly viewport = inject(ViewportService);

  readonly sidebarCollapsed = signal(false);

  readonly mobileSidebarOpen = signal(false);

  readonly breadcrumbs = signal<Breadcrumb[]>([]);

  readonly sidebarWidth = computed(() => (this.sidebarCollapsed() ? 80 : 260));

  readonly darkMode = computed(() => this.theme.theme());

  toggleSidebar(): void {
    this.sidebarCollapsed.update((v) => !v);
  }

  openSidebar(): void {
    this.mobileSidebarOpen.set(true);
  }

  closeSidebar(): void {
    this.mobileSidebarOpen.set(false);
  }

  toggleTheme(): void {
    this.theme.toggle();
  }

  initializeTheme(): void {
    this.theme.setTheme('light');
  }

  async toggleFullscreen(): Promise<void> {
    await this.fullscreen.toggle();
  }

  setBreadcrumbs(breadcrumbs: Breadcrumb[]): void {
    this.breadcrumbs.set(breadcrumbs);
  }
}
