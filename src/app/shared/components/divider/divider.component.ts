import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'erp-divider',
  standalone: true,
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

  @Input() spacing: 'none' | 'sm' | 'md' | 'lg' = 'md';

  @Input() label = '';
}
