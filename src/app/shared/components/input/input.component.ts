import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { ComponentSize, ComponentStatus, IconName } from '../../types';
import { InputType } from './input.types';
import { IconComponent } from '../../ui/display/icon';
import { BaseValueAccessor } from '../../base';

@Component({
  selector: 'erp-input',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent extends BaseValueAccessor<string> {
  @Input() type: InputType = 'text';

  @Input() label = '';

  @Input() placeholder = '';

  @Input() hint = '';

  @Input() error = '';

  @Input() required = false;

  @Input() readonly = false;

  // @Input() disabled = false;

  @Input() clearable = false;

  @Input() autocomplete = 'off';

  @Input() maxLength?: number;

  @Input() prefixIcon?: IconName;

  @Input() suffixIcon?: IconName;

  @Input() size: ComponentSize = 'md';

  @Input() status: ComponentStatus = 'default';

  @Output() valueChange = new EventEmitter<string>();

  hidePassword = true;

  update(value: string): void {
    this.updateValue(value);

    this.valueChange.emit(value);
  }

  clear(): void {
    this.update('');
  }

  togglePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  get inputType(): string {
    if (this.type === 'password') {
      return this.hidePassword ? 'password' : 'text';
    }

    return this.type;
  }
}
