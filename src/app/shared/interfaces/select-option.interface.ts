import { BaseOption } from './base-option.interface';

export interface SelectOption<T = unknown> extends BaseOption<T> {
  group?: string;
  data?: unknown;
}
