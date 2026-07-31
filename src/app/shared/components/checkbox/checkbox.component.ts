import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { IconComponent } from '../../../shared/ui/display/icon/icon.component';
import { BaseValueAccessor } from '../../base';

@Component({
  selector: 'erp-checkbox',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent extends BaseValueAccessor<boolean> {
  @Input() label = '';

  @Input() description = '';

  @Input() indeterminate = false;

  @Input() required = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  checked = false;

  toggle() {
    this.indeterminate = false;

    this.updateValue(!this.value);

    this.checkedChange.emit(this.value);
  }
}
