import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';

import { ChipAppearance, ChipShape, ChipSize, ChipVariant } from './chip.types';
import { IconComponent } from '../icon';
import { AvatarComponent } from '../avatar';
import { BadgeSize } from '../badge';
import { DEFAULT_APPEARANCE } from '../../../base/constants';

@Component({
  selector: 'erp-chip',
  standalone: true,
  templateUrl: './chip.component.html',
  imports: [IconComponent, AvatarComponent],
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {
  // -----------------------------------
  // Appearance
  // -----------------------------------

  readonly variant = input<ChipVariant>('primary');

  readonly appearance = input(DEFAULT_APPEARANCE);

  readonly size = input<BadgeSize>('md');

  readonly shape = input<ChipShape>('pill');

  // -----------------------------------
  // Icons
  // -----------------------------------

  readonly leftIcon = input('');

  readonly rightIcon = input('');

  // -----------------------------------
  // Avatar
  // -----------------------------------

  readonly avatar = input('');

  readonly avatarName = input('');

  // -----------------------------------
  // States
  // -----------------------------------

  readonly removable = input(false);

  readonly disabled = input(false);

  readonly selectable = input(false);

  readonly selected = input(false);

  // -----------------------------------
  // Accessibility
  // -----------------------------------

  readonly ariaLabel = input('');

  // -----------------------------------
  // Outputs
  // -----------------------------------

  readonly clicked = output<MouseEvent>();

  readonly removed = output<void>();

  readonly selectedChange = output<boolean>();

  // -----------------------------------
  // Computed
  // -----------------------------------

  readonly cssClasses = computed(() =>
    [
      this.variant(),
      this.appearance(),
      this.size(),
      this.shape(),
      this.selected() ? 'selected' : '',
      this.disabled() ? 'disabled' : '',
      this.selectable() ? 'selectable' : '',
    ]
      .filter(Boolean)
      .join(' '),
  );

  // -----------------------------------
  // Events
  // -----------------------------------

  onClick(event: MouseEvent): void {
    if (this.disabled()) {
      event.preventDefault();
      return;
    }

    if (this.selectable()) {
      this.selectedChange.emit(!this.selected());
    }

    this.clicked.emit(event);
  }

  onRemove(event: MouseEvent): void {
    event.stopPropagation();

    if (this.disabled()) {
      return;
    }

    this.removed.emit();
  }
}
