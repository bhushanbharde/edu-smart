import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';


import { IconName } from "../../../shared/types";
import { ChipSize, ChipVariant } from './chip.types';
import { IconComponent } from "../../ui/display/icon";

@Component({
  selector: 'erp-chip',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {
  @Input()
  label = '';

  @Input()
  variant: ChipVariant = 'default';

  @Input()
  size: ChipSize = 'md';

  @Input()
  icon?: IconName;

  @Input()
  removable = false;

  @Input()
  disabled = false;

  @Output()
  removed = new EventEmitter<void>();

  onRemove(): void {
    if (this.disabled) {
      return;
    }

    this.removed.emit();
  }
}
