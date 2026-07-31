import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'erp-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent {
  @Input()
  label = '';

  @Input()
  description = '';

  @Input()
  value: any;

  @Input()
  checked = false;

  @Input()
  disabled = false;

  @Input()
  required = false;

  @Output()
  selected = new EventEmitter<RadioComponent>();

  select(): void {
    if (this.disabled) {
      return;
    }

    this.selected.emit(this);
  }
}
