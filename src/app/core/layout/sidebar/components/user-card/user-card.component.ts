import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IconComponent } from '../../../../../shared/ui/display/icon/icon.component';

@Component({
  selector: 'erp-sidebar-user-card',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarUserCardComponent {
  @Input()
  name = 'Administrator';

  @Input()
  role = 'Super Admin';

  @Input()
  avatarUrl?: string;

  @Input()
  collapsed = false;
}
