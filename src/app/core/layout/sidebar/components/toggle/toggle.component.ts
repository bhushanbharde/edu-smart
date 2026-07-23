import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SidebarStateService } from '../../services/sidebar-state.service';
import { IconComponent } from '../../../../../shared/ui/display/icon/icon.component';
import { Menu, ChevronLeft, ChevronRight, PanelLeft, PanelRight } from 'lucide-angular';

@Component({
  selector: 'erp-sidebar-toggle',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarToggleComponent {
  readonly state = inject(SidebarStateService);
  panelLeft = PanelLeft;
  panelRight = PanelRight;
  chevronLeft = ChevronLeft;
  chevronRight = ChevronRight;
  menu = Menu;

  toggle(): void {
    this.state.toggle();
  }
}
