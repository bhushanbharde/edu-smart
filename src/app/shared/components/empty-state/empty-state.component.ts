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
  selector: 'erp-empty-state',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  @Input() icon: IconName = 'folderOpen';

  @Input() title = 'No data found';

  @Input() description = 'There are no records to display at the moment.';

  @Input() actionLabel = '';

  @Input() secondaryActionLabel = '';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Output() action = new EventEmitter<void>();

  @Output() secondaryAction = new EventEmitter<void>();

  onAction(): void {
    this.action.emit();
  }

  onSecondaryAction(): void {
    this.secondaryAction.emit();
  }
}
