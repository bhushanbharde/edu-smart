import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComponentColor, ComponentSize } from '../../base/types';


@Component({
  selector: 'erp-spinner',
  standalone: true,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input()
  size: ComponentSize = 'md';

  @Input()
  color: ComponentColor = 'primary';

  @Input()
  label = 'Loading...';
}
