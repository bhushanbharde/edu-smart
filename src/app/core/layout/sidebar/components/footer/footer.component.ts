import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'erp-sidebar-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarFooterComponent {
  @Input()
  collapsed = false;
}
