import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ComponentSize } from '../../types';


@Component({
  selector: 'erp-switch',
  standalone: true,
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  @Input() label = '';
  @Input() description = '';

  @Input() checked = false;
  @Input() disabled = false;

  @Input() size: ComponentSize = 'md';

  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() change = new EventEmitter<boolean>();

  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.checked = !this.checked;

    this.checkedChange.emit(this.checked);
    this.change.emit(this.checked);
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }
}
