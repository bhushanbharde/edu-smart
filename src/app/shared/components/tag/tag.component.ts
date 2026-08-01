import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
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

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() icon?: IconName;

  @Input() removable = false;

  @Input() disabled = false;

  @Output() removed = new EventEmitter<void>();

  onRemove(event: MouseEvent): void {
    event.stopPropagation();

    if (this.disabled) {
      return;
    }

    this.removed.emit();
  }
}
