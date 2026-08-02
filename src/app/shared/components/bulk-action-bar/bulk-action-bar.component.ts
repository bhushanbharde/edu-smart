import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IconComponent } from '../../ui/display/icon';
import { BulkAction } from './bulk-action-bar.types';


@Component({
  selector: 'erp-bulk-action-bar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './bulk-action-bar.component.html',
  styleUrl: './bulk-action-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulkActionBarComponent {
  @Input() selectedCount = 0;

  @Input() actions: BulkAction[] = [];

  @Input() showClear = true;

  @Input() clearLabel = 'Clear selection';

  @Output() actionClick = new EventEmitter<BulkAction>();

  @Output() clear = new EventEmitter<void>();

  onAction(action: BulkAction): void {
    if (action.disabled) {
      return;
    }

    this.actionClick.emit(action);
  }

  onClear(): void {
    this.clear.emit();
  }
}
