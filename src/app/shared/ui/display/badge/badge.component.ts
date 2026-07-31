import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IconComponent } from '../../../../shared/ui/display/icon/icon.component';
import { IconName } from '../../../types';

import { BadgeVariant, BadgeSize } from './badge.types';

@Component({
  selector: 'erp-badge',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  @Input()
  text = '';

  @Input()
  variant: BadgeVariant = 'primary';

  @Input()
  size: BadgeSize = 'md';

  @Input()
  rounded = false;

  @Input()
  dot = false;

  @Input()
  icon?: IconName;
}
