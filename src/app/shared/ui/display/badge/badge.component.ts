import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import { BadgeSize, BadgeVariant } from './badge.types';
import { AvatarSize } from '../avatar';

@Component({
  selector: 'erp-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  readonly value = input<string | number>('');

  readonly variant = input<BadgeVariant>('primary');

  readonly size = input<AvatarSize>('md');

  readonly rounded = input(true);

  readonly outlined = input(false);

  readonly dot = input(false);

  readonly max = input(99);

  readonly displayValue = computed(() => {
    const value = this.value();

    if (typeof value !== 'number') {
      return value;
    }

    return value > this.max() ? `${this.max()}+` : value;
  });
}
