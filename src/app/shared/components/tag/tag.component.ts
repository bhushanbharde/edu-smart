import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../../ui/display/icon';
import { IconName } from '../../types';


@Component({
  selector: 'erp-tag',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  @Input() label = '';

  @Input() variant:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'purple' = 'default';

  @Input() size: 'sm' | 'md' = 'sm';

  @Input() icon?: IconName;

  @Input() removable = false;

  @Input() disabled = false;

  onRemove(): void {
    // Event can be added when required.
  }
}
