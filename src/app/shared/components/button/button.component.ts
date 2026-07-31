import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ButtonVariant, ButtonSize } from './button.types';
import { IconComponent } from "../../../shared/ui/display/icon/icon.component";

@Component({
  selector: 'erp-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input()
  variant: ButtonVariant = 'primary';

  @Input()
  size: ButtonSize = 'md';

  @Input()
  label = '';

  @Input()
  leftIcon?: any;

  @Input()
  rightIcon?: any;

  @Input()
  disabled = false;

  @Input()
  loading = false;

  @Input()
  fullWidth = false;

  @Input()
  rounded = false;

  @Input()
  type: 'button' | 'submit' | 'reset' = 'button';
}
