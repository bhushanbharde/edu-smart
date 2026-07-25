import { IconName } from '../core/types';

export interface BaseOption<T = unknown> {
  /**
   * Display text.
   */
  label: string;

  /**
   * Stored value.
   */
  value: T;

  /**
   * Disable option.
   */
  disabled?: boolean;

  /**
   * Optional icon.
   */
  icon?: IconName;

  /**
   * Secondary text.
   */
  description?: string;
}
