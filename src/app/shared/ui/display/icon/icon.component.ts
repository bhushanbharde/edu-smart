import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

// import { IconColor, IconSize, IconName } from './icon.types';
import { ComponentColor, ComponentSize, IconName } from '../../../types';

import { APP_ICONS } from './icon.registry';

@Component({
  selector: 'erp-icon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input({ required: true })
  name!: IconName;

  @Input()
  size: ComponentSize = 'md';

  @Input()
  color: ComponentColor = 'inherit';

  readonly icons = APP_ICONS;
}
