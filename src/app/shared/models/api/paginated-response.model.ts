import { Pagination } from './pagination.model';

export interface PaginatedResponse<T> {
  items: T[];

  pagination: Pagination;
}
