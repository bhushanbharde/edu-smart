import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../../ui/display/icon';
import { TagComponent } from '../tag/tag.component';
import { IconName } from '../../types';



@Component({
  selector: 'erp-table-cell',
  standalone: true,
  imports: [IconComponent, TagComponent],
  templateUrl: './table-cell.component.html',
  styleUrl: './table-cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCellComponent {
  @Input() type:
    | 'text'
    | 'secondary'
    | 'avatar'
    | 'status'
    | 'icon'
    | 'number'
    | 'date'
    | 'empty' = 'text';

  @Input() value: unknown = '';

  @Input() secondary = '';

  @Input() avatar = '';

  @Input() icon?: IconName;

  @Input() status:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'purple' = 'default';

  @Input() emptyText = '—';

  get displayValue(): string {
    if (this.value === null || this.value === undefined || this.value === '') {
      return this.emptyText;
    }

    return String(this.value);
  }
}
