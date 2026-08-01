import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IconComponent } from '../../ui/display/icon';


@Component({
  selector: 'erp-pagination',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() currentPage = 1;

  @Input() totalItems = 0;

  @Input() pageSize = 10;

  @Input() maxVisiblePages = 5;

  @Input() showInfo = true;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get startItem(): number {
    if (!this.totalItems) {
      return 0;
    }

    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalItems);
  }

  get pages(): (number | 'ellipsis')[] {
    const total = this.totalPages;

    if (total <= this.maxVisiblePages) {
      return Array.from({ length: total }, (_, index) => index + 1);
    }

    const pages: (number | 'ellipsis')[] = [];

    const half = Math.floor(this.maxVisiblePages / 2);

    let start = Math.max(2, this.currentPage - half);

    let end = Math.min(total - 1, this.currentPage + half);

    if (this.currentPage <= half + 1) {
      start = 2;
      end = this.maxVisiblePages - 1;
    }

    if (this.currentPage >= total - half) {
      start = total - this.maxVisiblePages + 2;
      end = total - 1;
    }

    pages.push(1);

    if (start > 2) {
      pages.push('ellipsis');
    }

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    if (end < total - 1) {
      pages.push('ellipsis');
    }

    pages.push(total);

    return pages;
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }

    this.pageChange.emit(page);
  }

  previous(): void {
    this.goToPage(this.currentPage - 1);
  }

  next(): void {
    this.goToPage(this.currentPage + 1);
  }

  trackByPage(index: number, page: number | 'ellipsis'): string {
    return `${page}-${index}`;
  }
}
