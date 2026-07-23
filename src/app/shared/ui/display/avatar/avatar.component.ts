import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';

import {
  AvatarColor,
  AvatarShape,
  AvatarSize,
  AvatarStatus,
} from './avatar.types';
import { ButtonSize, DEFAULT_BUTTON_SIZE } from '../../button';
import { DEFAULT_COLOR } from '../../../base/constants';

@Component({
  selector: 'erp-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sms-avatar-host',
  },
})
export class AvatarComponent {
  readonly src = input<string>();

  readonly name = input('');

  readonly initials = input('');

  readonly icon = input('person');

  readonly size = input<ButtonSize>(DEFAULT_BUTTON_SIZE);

  readonly shape = input<AvatarShape>('circle');

  readonly color = input(DEFAULT_COLOR);

  readonly status = input<AvatarStatus>('none');

  readonly alt = input('');

  readonly imageLoaded = signal(true);

  readonly displayInitials = computed(() => {
    if (this.initials()) {
      return this.initials().toUpperCase();
    }

    if (!this.name()) {
      return '';
    }

    return this.name()
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  });

  onImageError(): void {
    this.imageLoaded.set(false);
  }
}
