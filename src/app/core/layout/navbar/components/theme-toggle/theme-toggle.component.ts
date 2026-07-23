import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { NavbarActionComponent } from '../action/navbar-action.component';

@Component({
  selector: 'erp-theme-toggle',
  standalone: true,
  imports: [NavbarActionComponent],
  templateUrl: './theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  readonly darkMode = signal(false);

  toggleTheme(): void {
    this.darkMode.update((value) => !value);

    document.documentElement.classList.toggle('dark-theme', this.darkMode());
  }
}
