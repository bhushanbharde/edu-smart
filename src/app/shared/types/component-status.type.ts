/**
 * Represents the current state of a component.
 *
 * Used for validation, feedback, and visual state.
 */
export type ComponentStatus =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'disabled'
  | 'loading';
