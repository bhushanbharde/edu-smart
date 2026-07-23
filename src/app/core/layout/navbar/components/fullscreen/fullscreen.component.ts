import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { NavbarActionComponent } from '../action/navbar-action.component';

@Component({
  selector: 'erp-fullscreen',
  standalone: true,
  imports: [NavbarActionComponent],
  templateUrl: './fullscreen.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullscreenComponent {
  readonly fullscreen = signal(false);

  async toggle(): Promise<void> {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      this.fullscreen.set(true);
    } else {
      await document.exitFullscreen();
      this.fullscreen.set(false);
    }
  }
}
