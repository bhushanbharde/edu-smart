import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from "../../../../../shared/ui/display/icon";

@Component({
  selector: 'erp-sidebar-logo',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLogoComponent {
  @Input()
  collapsed = false;
}
