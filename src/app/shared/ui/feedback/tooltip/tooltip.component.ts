import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TooltipPosition } from './tooltip.types';

@Component({
  selector: 'erp-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  @Input()
  text = '';

  @Input()
  position: TooltipPosition = 'top';

  @Input()
  disabled = false;
}
