import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IconComponent } from '../../../../../shared/ui/display/icon/icon.component';
import { SidebarStateService } from '../../services/sidebar-state.service';

@Component({
  selector: 'erp-sidebar-toggle',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarToggleComponent {
  readonly state = inject(SidebarStateService);

  toggle(): void {
    this.state.toggle();
  }
}
