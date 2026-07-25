import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AvatarComponent } from '../../../../../shared/ui/display/avatar/avatar.component';
import { IconComponent } from '../../../../../shared/ui/display/icon/icon.component';

@Component({
  selector: 'erp-sidebar-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarUserCardComponent {
  @Input()
  collapsed = false;

  user = {
    name: 'Bhushan Bharde',
    role: 'Administrator',
    initials: 'BB',
  };
}
