import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComponentSize } from '../../base/types';


@Component({
  selector: 'erp-skeleton',
  standalone: true,
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
  @Input()
  width = '100%';

  @Input()
  height = '';

  @Input()
  size: ComponentSize = 'md';

  @Input()
  variant: 'text' | 'rectangular' | 'circular' = 'text';

  @Input()
  animation: 'pulse' | 'wave' | 'none' = 'wave';

  @Input()
  lines = 1;
}
