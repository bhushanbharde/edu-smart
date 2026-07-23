import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

import {
  DEFAULT_BUTTON_APPEARANCE,
  DEFAULT_BUTTON_SHAPE,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from './button.constants';

import {
  ButtonAppearance,
  ButtonShape,
  ButtonSize,
  ButtonType,
  ButtonVariant,
} from './button.types';
import { IconComponent } from '../display/icon';
import { DEFAULT_APPEARANCE, DEFAULT_SIZE } from '../../base/constants';

@Component({
  selector: 'erp-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  // ----------------------------------------------------------
  // Native Button
  // ----------------------------------------------------------

  readonly type = input<ButtonType>('button');

  readonly disabled = input(false);

  // ----------------------------------------------------------
  // Appearance
  // ----------------------------------------------------------

  readonly variant = input<ButtonVariant>(DEFAULT_BUTTON_VARIANT);

  readonly appearance = input(DEFAULT_APPEARANCE);

  readonly size = input(DEFAULT_SIZE);

  readonly shape = input<ButtonShape>(DEFAULT_BUTTON_SHAPE);

  // ----------------------------------------------------------
  // Icons
  // ----------------------------------------------------------

  readonly icon = input('');

  readonly leftIcon = input('');

  readonly rightIcon = input('');

  readonly iconOnly = input(false);

  // ----------------------------------------------------------
  // States
  // ----------------------------------------------------------

  readonly loading = input(false);

  readonly fullWidth = input(false);

  readonly elevated = input(false);

  // ----------------------------------------------------------
  // Accessibility
  // ----------------------------------------------------------

  readonly ariaLabel = input('');

  // ----------------------------------------------------------
  // Outputs
  // ----------------------------------------------------------

  readonly buttonClick = output<MouseEvent>();

  // ----------------------------------------------------------
  // Computed
  // ----------------------------------------------------------

  readonly isDisabled = computed(() => {
    return this.disabled() || this.loading();
  });

  readonly cssClasses = computed(() =>
    [
      this.variant(),

      this.appearance(),

      this.size(),

      this.shape(),

      this.fullWidth() ? 'full-width' : '',

      this.elevated() ? 'elevated' : '',

      this.iconOnly() ? 'icon-only' : '',
    ]
      .filter(Boolean)
      .join(' '),
  );

  // ----------------------------------------------------------
  // Events
  // ----------------------------------------------------------

  onClick(event: MouseEvent): void {
    if (this.isDisabled()) {
      event.preventDefault();

      return;
    }

    this.buttonClick.emit(event);
  }
}
