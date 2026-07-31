import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IconComponent } from '../../../shared/ui/display/icon/icon.component';

import { CardComponent } from '../card';

import { IconName } from '../../types';

import { StatTrend, StatCardColor } from './stat-card.types';

@Component({
  selector: 'erp-stat-card',
  standalone: true,
  imports: [CommonModule, CardComponent, IconComponent],
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCardComponent {
  @Input() title = '';

  @Input() value = '';

  @Input() icon!: IconName;

  @Input() trend: StatTrend = 'neutral';

  @Input() percentage = '';

  @Input() comparison = 'vs last month';

  @Input() color: StatCardColor = 'primary';

  @Input() loading = false;

  @Input() clickable = false;
}
