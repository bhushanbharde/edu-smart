import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';


import { TableAction, TableColumn, TableFilter } from './table.types';
import { IconComponent } from '../../ui/display/icon';
import { PaginationComponent } from "../pagination/pagination.component";
import { ColumnSelectorComponent } from '../column-selector/column-selector.component';
import { FilterPanelComponent } from '../filter-panel/filter-panel.component';
import { FilterField } from '../filter-panel/filter-panel.types';
import { ColumnOption } from '../column-selector/column-selector.types';

@Component({
  selector: 'erp-table',
  standalone: true,
  imports: [
    IconComponent,
    PaginationComponent,
    ColumnSelectorComponent,
    FilterPanelComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T = any> {
  @Input() columns: TableColumn<T>[] = [];

  @Input() data: T[] = [];

  @Input() rowKey = 'id';

  @Input() selectable = false;

  @Input() actions: TableAction<T>[] = [];

  @Input() loading = false;

  @Input() emptyText = 'No records found.';

  @Input() page = 1;

  @Input() pageSize = 10;

  @Input() totalItems = 0;

  @Input() pageSizeOptions = [10, 25, 50, 100];

  @Input() showPagination = true;

  //Table Filter START
  @Input() searchable = false;

  @Input() searchPlaceholder = 'Search...';

  @Input() searchValue = '';

  @Input() clientSideSearch = false;

  @Output() searchChange = new EventEmitter<string>();

  @Output() filterChange = new EventEmitter<TableFilter[]>();
  //Table Filter END

  @Input() showFilter = false;

  @Input() showColumns = false;

  @Input() showExport = false;

  @Input() exportLabel = 'Export';

  @Input() filterFields: FilterField[] = [];

  @Output() exportClick = new EventEmitter<void>();

  @Output() pageChange = new EventEmitter<number>();

  @Output() pageSizeChange = new EventEmitter<number>();

  @Output() selectionChange = new EventEmitter<T[]>();

  @Output() rowClick = new EventEmitter<T>();

  @Output() actionClick = new EventEmitter<{
    action: TableAction<T>;
    row: T;
  }>();

  @Output() sortChange = new EventEmitter<{
    column: TableColumn<T>;
    direction: 'asc' | 'desc';
  }>();

  filterOpen = false;

  columnSelectorOpen = false;

  activeFilters: TableFilter[] = [];

  selectedRows: T[] = [];

  openActionRow: T | null = null;

  sortColumn?: TableColumn<T>;

  sortDirection: 'asc' | 'desc' = 'asc';

  onFilterChangeFromPanel(filters: Record<string, string>): void {
    const activeFilters: TableFilter[] = Object.entries(filters)
      .filter(
        ([, value]) => value !== null && value !== undefined && value !== '',
      )
      .map(([key, value]) => ({
        key,
        value,
      }));

    this.activeFilters = activeFilters;

    this.filterChange.emit(activeFilters);

    this.filterOpen = false;
  }

  onFilterClear(): void {
    this.activeFilters = [];

    this.filterChange.emit([]);

    this.filterOpen = false;
  }

  getColumnOptions(): ColumnOption[] {
    return this.columns.map((column) => ({
      key: column.key,
      label: column.label,
      visible: column.visible !== false,
    }));
  }

  onColumnsChange(options: ColumnOption[]): void {
    const visibility = new Map(
      options.map((option) => [option.key, option.visible]),
    );

    this.columns = this.columns.map((column) => ({
      ...column,
      visible: visibility.get(column.key) ?? column.visible,
    }));

    this.columnSelectorOpen = false;
  }

  toggleFilter(): void {
    this.filterOpen = !this.filterOpen;
    this.columnSelectorOpen = false;
  }

  toggleColumnSelector(): void {
    this.columnSelectorOpen = !this.columnSelectorOpen;

    this.filterOpen = false;
  }

  closePanels(): void {
    this.filterOpen = false;
    this.columnSelectorOpen = false;
  }

  onExport(): void {
    this.exportClick.emit();
  }

  get visibleColumns(): TableColumn<T>[] {
    return this.columns.filter((column) => column.visible !== false);
  }

  get allSelected(): boolean {
    return (
      this.data.length > 0 && this.selectedRows.length === this.data.length
    );
  }

  // Table Filter
  onSearch(value: string): void {
    this.searchValue = value;

    this.searchChange.emit(value);

    if (this.clientSideSearch) {
      this.page = 1;
    }
  }

  onFilterChange(filters: TableFilter[]): void {
    this.activeFilters = filters;

    this.filterChange.emit(filters);

    if (this.clientSideSearch) {
      this.page = 1;
    }
  }
  // Table Filter

  isSelected(row: T): boolean {
    return this.selectedRows.some(
      (selected) => this.getRowKey(selected) === this.getRowKey(row),
    );
  }

  getRowKey(row: T): unknown {
    return (row as any)[this.rowKey];
  }

  toggleAll(): void {
    if (this.allSelected) {
      this.selectedRows = [];
    } else {
      this.selectedRows = [...this.data];
    }

    this.selectionChange.emit(this.selectedRows);
  }

  toggleRow(row: T): void {
    if (this.isSelected(row)) {
      this.selectedRows = this.selectedRows.filter(
        (selected) => this.getRowKey(selected) !== this.getRowKey(row),
      );
    } else {
      this.selectedRows = [...this.selectedRows, row];
    }

    this.selectionChange.emit(this.selectedRows);
  }

  onRowClick(row: T): void {
    this.rowClick.emit(row);
  }

  toggleActions(row: T): void {
    if (
      this.openActionRow &&
      this.getRowKey(this.openActionRow) === this.getRowKey(row)
    ) {
      this.openActionRow = null;
    } else {
      this.openActionRow = row;
    }
  }

  executeAction(action: TableAction<T>, row: T): void {
    if (action.disabled && action.disabled(row)) {
      return;
    }

    this.openActionRow = null;

    this.actionClick.emit({
      action,
      row,
    });
  }

  sort(column: TableColumn<T>): void {
    if (!column.sortable) {
      return;
    }

    if (this.sortColumn?.key === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;

      this.sortDirection = 'asc';
    }

    this.sortChange.emit({
      column,
      direction: this.sortDirection,
    });
  }

  getCellValue(row: T, column: TableColumn<T>): unknown {
    if (column.getValue) {
      return column.getValue(row);
    }

    return (row as any)[column.key];
  }

  //Pagination
  get totalPages(): number {
    if (this.totalItems === 0) {
      return 0;
    }

    return Math.ceil(this.totalItems / this.pageSize);
  }

  onPageChange(page: number): void {
    this.page = page;

    this.pageChange.emit(page);

    this.clearActionMenu();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;

    this.page = 1;

    this.pageSizeChange.emit(size);

    this.clearActionMenu();
  }

  clearActionMenu(): void {
    this.openActionRow = null;
  }
}
