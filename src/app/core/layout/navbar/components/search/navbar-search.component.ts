import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IconComponent } from '../../../../../shared/ui/display/icon';

@Component({
  selector: 'erp-navbar-search',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSearchComponent {
  readonly value = signal('');
}
