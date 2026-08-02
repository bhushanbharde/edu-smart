import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';


import { ColumnOption } from './column-selector.types';
import { IconComponent } from '../../ui/display/icon';

@Component({
  selector: 'erp-column-selector',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './column-selector.component.html',
  styleUrl: './column-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnSelectorComponent {
  @Input() columns: ColumnOption[] = [];

  @Input() title = 'Columns';

  @Input() showReset = true;

  @Output() columnsChange = new EventEmitter<ColumnOption[]>();

  toggleColumn(column: ColumnOption): void {
    if (column.disabled) {
      return;
    }

    const updated = this.columns.map((item) =>
      item.key === column.key
        ? {
            ...item,
            visible: !item.visible,
          }
        : item,
    );

    this.columns = updated;

    this.columnsChange.emit(updated);
  }

  reset(): void {
    const updated = this.columns.map((column) => ({
      ...column,
      visible: true,
    }));

    this.columns = updated;

    this.columnsChange.emit(updated);
  }

  trackByKey(index: number, column: ColumnOption): string {
    return column.key;
  }
}
