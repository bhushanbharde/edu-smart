import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type StatusChipStatus =
  | 'active'
  | 'inactive'
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'present'
  | 'absent'
  | 'late'
  | 'paid'
  | 'unpaid'
  | 'draft'
  | 'completed'
  | 'cancelled';

@Component({
  selector: 'erp-status-chip',
  standalone: true,
  templateUrl: './status-chip.component.html',
  styleUrl: './status-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusChipComponent {
  readonly label = input.required<string>();

  readonly status = input<StatusChipStatus>('active');

  readonly showDot = input(true);
}
