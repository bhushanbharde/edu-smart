import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export type BadgeAppearance = 'soft' | 'solid' | 'outline';

@Component({
  selector: 'erp-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  readonly text = input.required<string>();

  readonly variant = input<BadgeVariant>('primary');

  readonly appearance = input<BadgeAppearance>('soft');

  readonly rounded = input(true);
}
