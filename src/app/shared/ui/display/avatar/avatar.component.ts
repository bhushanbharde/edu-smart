import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AvatarSize, AvatarStatus } from './avatar.types';

@Component({
  selector: 'erp-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input()
  src?: string;

  @Input()
  alt = '';

  @Input()
  name = '';

  @Input()
  size: AvatarSize = 'md';

  @Input()
  status?: AvatarStatus;

  @Input()
  rounded = true;

  get initials(): string {
    if (!this.name.trim()) {
      return '?';
    }

    const parts = this.name.trim().split(/\s+/);

    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
}
