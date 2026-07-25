import { Injectable, computed, signal, inject } from '@angular/core';
import { StorageService } from '../../../services/storage/storage.service';
import { BreakpointService } from '../../../services/breakpoint/breakpoint.service';

const SIDEBAR_KEY = 'erp_sidebar_collapsed';

@Injectable({
  providedIn: 'root',
})
export class SidebarStateService {
  private storage = inject(StorageService);

  private breakpoint = inject(BreakpointService);

  private readonly mobileOpenState = signal(false);

  readonly mobileOpen = computed(() => this.mobileOpenState());

  private readonly collapsedState = signal(
    this.storage.get<boolean>(SIDEBAR_KEY) ?? false,
  );

  readonly collapsed = computed(() => this.collapsedState());

  toggle(): void {
    const value = !this.collapsedState();

    this.collapsedState.set(value);

    this.save(value);
  }

  collapse(): void {
    this.collapsedState.set(true);

    this.save(true);
  }

  expand(): void {
    this.collapsedState.set(false);

    this.save(false);
  }

  private save(value: boolean): void {
    this.storage.set(SIDEBAR_KEY, value);
  }

  toggleMobile(): void {
    this.mobileOpenState.update((value) => !value);
  }

  openMobile(): void {
    this.mobileOpenState.set(true);
  }

  closeMobile(): void {
    this.mobileOpenState.set(false);
  }
}
