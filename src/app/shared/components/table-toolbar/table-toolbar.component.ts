import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IconComponent } from '../../ui/display/icon/icon.component';
import { TableToolbarAction } from './table-toolbar.types';


@Component({
  selector: 'erp-table-toolbar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './table-toolbar.component.html',
  styleUrl: './table-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableToolbarComponent {
  @Input() searchable = true;

  @Input() searchValue = '';

  @Input() searchPlaceholder = 'Search...';

  @Input() showFilter = true;

  @Input() showColumns = true;

  @Input() showExport = true;

  @Input() exportLabel = 'Export';

  @Input() actions: TableToolbarAction[] = [];

  @Output() searchChange = new EventEmitter<string>();

  @Output() filterClick = new EventEmitter<void>();

  @Output() columnsClick = new EventEmitter<void>();

  @Output() exportClick = new EventEmitter<void>();

  @Output() actionClick = new EventEmitter<TableToolbarAction>();

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchChange.emit(input.value);
  }

  clearSearch(): void {
    this.searchChange.emit('');
  }

  onFilter(): void {
    this.filterClick.emit();
  }

  onColumns(): void {
    this.columnsClick.emit();
  }

  onExport(): void {
    this.exportClick.emit();
  }

  onAction(action: TableToolbarAction): void {
    if (action.disabled) {
      return;
    }

    this.actionClick.emit(action);
  }
}
