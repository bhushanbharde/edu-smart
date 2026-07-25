import { Injectable, computed, inject, signal } from '@angular/core';
import { StorageService } from '../storage/storage.service';

export type ThemeMode = 'light' | 'dark' | 'system';

const THEME_KEY = 'erp-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private storage = inject(StorageService);

  private readonly themeState = signal<ThemeMode>(
    this.storage.get<ThemeMode>(THEME_KEY) ?? 'light',
  );

  readonly theme = computed(() => this.themeState());

  constructor() {
    this.applyTheme(this.themeState());
  }

  setTheme(theme: ThemeMode): void {
    this.themeState.set(theme);

    this.storage.set(THEME_KEY, theme);

    this.applyTheme(theme);
  }

  toggle(): void {
    this.setTheme(this.themeState() === 'light' ? 'dark' : 'light');
  }

  private applyTheme(theme: ThemeMode): void {
    const html = document.documentElement;

    if (theme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;

      html.classList.toggle('dark', prefersDark);
      return;
    }

    html.classList.toggle('dark', theme === 'dark');
  }
}
