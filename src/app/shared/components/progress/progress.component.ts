import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComponentSize } from '../../types';
import { ComponentColor } from '../../base/types';


@Component({
  selector: 'erp-progress',
  standalone: true,
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  @Input() value = 0;
  @Input() max = 100;

  @Input() label = '';
  @Input() showValue = false;

  @Input() color: ComponentColor = 'primary';
  @Input() size: ComponentSize = 'md';

  @Input() striped = false;
  @Input() animated = false;

  get percentage(): number {
    if (this.max <= 0) {
      return 0;
    }

    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }

  get displayValue(): string {
    return `${Math.round(this.percentage)}%`;
  }
}
