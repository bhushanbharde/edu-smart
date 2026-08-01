import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';



import {
  TableAction,
  TableColumn,
  TableRowAction,
  TableSort,
} from './table.types';
import { IconComponent } from '../../ui/display/icon';
import { MenuComponent } from '../menu/menu.component';
import { MenuItem } from '../menu/menu.types';

@Component({
  selector: 'erp-table',
  standalone: true,
  imports: [IconComponent, MenuComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T = any> {
  /* ========================================================
     DATA
     ======================================================== */

  @Input() columns: TableColumn<T>[] = [];

  @Input() data: T[] = [];

  @Input() rowActions: TableAction<T>[] = [];

  /* ========================================================
     FEATURES
     ======================================================== */

  @Input() selectable = true;

  @Input() hoverable = true;

  @Input() striped = false;

  @Input() bordered = false;

  @Input() loading = false;

  @Input() emptyMessage = 'No records found';

  /* ========================================================
     EVENTS
     ======================================================== */

  @Output() rowClick = new EventEmitter<T>();

  @Output() selectionChange = new EventEmitter<T[]>();

  @Output() sortChange = new EventEmitter<TableSort>();

  @Output() actionSelected = new EventEmitter<TableRowAction<T>>();

  /* ========================================================
     STATE
     ======================================================== */

  selectedRows = new Set<T>();

  openActionRow: T | null = null;

  currentSort: TableSort | null = null;

  /* ========================================================
     COLUMNS
     ======================================================== */

  get visibleColumns(): TableColumn<T>[] {
    return this.columns.filter((column) => column.visible !== false);
  }

  /* ========================================================
     SELECTION
     ======================================================== */

  isSelected(row: T): boolean {
    return this.selectedRows.has(row);
  }

  isAllSelected(): boolean {
    return (
      this.data.length > 0 &&
      this.data.every((row) => this.selectedRows.has(row))
    );
  }

  isSomeSelected(): boolean {
    return this.selectedRows.size > 0 && !this.isAllSelected();
  }

  toggleRowSelection(row: T): void {
    if (this.selectedRows.has(row)) {
      this.selectedRows.delete(row);
    } else {
      this.selectedRows.add(row);
    }

    this.emitSelection();
  }

  toggleAllSelection(): void {
    if (this.isAllSelected()) {
      this.data.forEach((row) => this.selectedRows.delete(row));
    } else {
      this.data.forEach((row) => this.selectedRows.add(row));
    }

    this.emitSelection();
  }

  clearSelection(): void {
    this.selectedRows.clear();

    this.emitSelection();
  }

  emitSelection(): void {
    this.selectionChange.emit(Array.from(this.selectedRows));
  }

  /* ========================================================
     ROW
     ======================================================== */

  onRowClick(row: T): void {
    this.rowClick.emit(row);
  }

  /* ========================================================
     SORT
     ======================================================== */

  sort(column: TableColumn<T>): void {
    if (!column.sortable) {
      return;
    }

    if (
      this.currentSort?.key === String(column.key) &&
      this.currentSort.direction === 'asc'
    ) {
      this.currentSort = {
        key: String(column.key),
        direction: 'desc',
      };
    } else {
      this.currentSort = {
        key: String(column.key),
        direction: 'asc',
      };
    }

    this.sortChange.emit(this.currentSort);
  }

  isSorted(column: TableColumn<T>): boolean {
    return this.currentSort?.key === String(column.key);
  }

  isAscending(column: TableColumn<T>): boolean {
    return this.isSorted(column) && this.currentSort?.direction === 'asc';
  }

  /* ========================================================
     ACTION MENU
     ======================================================== */

  toggleActionMenu(event: MouseEvent, row: T): void {
    event.stopPropagation();

    this.openActionRow = this.openActionRow === row ? null : row;
  }

  closeActionMenu(): void {
    this.openActionRow = null;
  }

  getRowMenuItems(row: T): MenuItem[] {
    return this.rowActions
      .filter((action) => {
        if (action.visible === undefined) {
          return true;
        }

        if (typeof action.visible === 'function') {
          return action.visible(row);
        }

        return action.visible;
      })
      .map((action) => ({
        label: action.label,
        value: action.value,
        icon: action.icon,
        danger: action.danger,
        disabled: action.disabled,
      }));
  }

  onActionSelected(row: T, menuItem: MenuItem): void {
    const action = this.rowActions.find(
      (item) => item.value === menuItem.value,
    );

    if (!action) {
      return;
    }

    this.actionSelected.emit({
      row,
      action,
    });

    this.closeActionMenu();
  }

  /* ========================================================
     VALUES
     ======================================================== */

  getValue(row: T, key: keyof T | string): unknown {
    return (row as any)?.[key as any];
  }

  /* ========================================================
     TRACKING
     ======================================================== */

  trackByColumn(index: number, column: TableColumn<T>): string {
    return String(column.key);
  }

  trackByRow(index: number, row: T): number {
    return index;
  }
}
