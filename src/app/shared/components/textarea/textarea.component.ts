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
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { ComponentSize, ComponentStatus } from '../../types';
import { BaseValueAccessor } from '../../base';

@Component({
  selector: 'erp-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent extends BaseValueAccessor<string> {
  @Input() label = '';

  @Input() placeholder = '';

  @Input() hint = '';

  @Input() error = '';

  @Input() required = false;

  @Input() readonly = false;

  @Input() rows = 4;

  @Input() resize: 'none' | 'vertical' | 'horizontal' | 'both' = 'vertical';

  @Input() maxLength?: number;

  @Input() size: ComponentSize = 'md';

  @Input() status: ComponentStatus = 'default';

  @Output() valueChange = new EventEmitter<string>();

  update(value: string) {
    this.updateValue(value);

    this.valueChange.emit(value);
  }
}
