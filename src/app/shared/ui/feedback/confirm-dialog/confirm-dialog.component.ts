import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IconComponent } from '../../../../shared/ui/display/icon/icon.component';
import { ConfirmDialogVariant } from './confirm-dialog.types';

@Component({
  selector: 'erp-confirm-dialog',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  @Input() open = false;

  @Input() title = 'Are you sure?';

  @Input() message = '';

  @Input() confirmLabel = 'Confirm';

  @Input() cancelLabel = 'Cancel';

  @Input() variant: ConfirmDialogVariant = 'danger';

  @Input() loading = false;

  @Input() closeOnBackdrop = true;

  @Output() confirmed = new EventEmitter<void>();

  @Output() cancelled = new EventEmitter<void>();

  confirm(): void {
    if (!this.loading) {
      this.confirmed.emit();
    }
  }

  cancel(): void {
    if (!this.loading) {
      this.cancelled.emit();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (
      this.closeOnBackdrop &&
      event.target === event.currentTarget &&
      !this.loading
    ) {
      this.cancel();
    }
  }
}
