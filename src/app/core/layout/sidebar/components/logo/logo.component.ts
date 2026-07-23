import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'erp-sidebar-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLogoComponent {
  @Input()
  schoolName = 'School Management';

  @Input()
  shortName = 'SMS';

  @Input()
  logoUrl?: string;

  @Input()
  collapsed = false;
}
