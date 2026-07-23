import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarStateService {
  readonly collapsed = signal(false);

  readonly mobileOpen = signal(false);

  readonly isDesktop = signal(true);

  readonly width = computed(() => (this.collapsed() ? 72 : 280));

  toggle(): void {
    this.collapsed.update((value) => !value);
  }

  expand(): void {
    this.collapsed.set(false);
  }

  collapse(): void {
    this.collapsed.set(true);
  }

  openMobile(): void {
    this.mobileOpen.set(true);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
