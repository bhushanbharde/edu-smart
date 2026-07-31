import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ComponentSize } from '../../types';

@Component({
  selector: 'erp-time-picker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimePickerComponent {
  @Input() label = '';
  @Input() placeholder = 'Select time';

  @Input() value = '';

  @Input() min = '';
  @Input() max = '';

  @Input() required = false;
  @Input() disabled = false;
  @Input() readonly = false;

  @Input() error = '';
  @Input() hint = '';

  @Input() size: ComponentSize = 'md';

  @Output() valueChange = new EventEmitter<string>();
  @Output() change = new EventEmitter<string>();

  onValueChange(value: string): void {
    this.value = value;

    this.valueChange.emit(value);
    this.change.emit(value);
  }
}
