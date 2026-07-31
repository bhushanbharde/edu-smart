import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseValueAccessor } from '../../base';

import { IconComponent } from '../../ui/display/icon/icon.component';

@Component({
  selector: 'erp-date-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent extends BaseValueAccessor<string> {
  @Input() label = '';

  @Input() placeholder = '';

  @Output() valueChange = new EventEmitter<string>();

  update(value: string) {
    this.updateValue(value);

    this.valueChange.emit(value);
  }
}
