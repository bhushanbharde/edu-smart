import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IconComponent } from '../../ui/display/icon';
import { ComponentStatus } from '../../base/types';


@Component({
  selector: 'erp-alert',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() status: ComponentStatus = 'info';

  @Input() title = '';
  @Input() message = '';

  @Input() dismissible = false;

  @Output() dismissed = new EventEmitter<void>();

  visible = true;

  get icon(): 'checkCircle' | 'alertCircle' | 'error' | 'info' {
    switch (this.status) {
      case 'success':
        return 'checkCircle';

      case 'warning':
        return 'alertCircle';

      case 'danger':
        return 'error';

      default:
        return 'info';
    }
  }

  dismiss(): void {
    this.visible = false;
    this.dismissed.emit();
  }
}
