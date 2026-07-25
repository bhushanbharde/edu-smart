import { Directive, computed, input, output } from '@angular/core';

@Directive()
export abstract class InteractiveComponent {
  /**
   * ----------------------------------------------------
   * Common States
   * ----------------------------------------------------
   */

  readonly disabled = input(false);

  readonly loading = input(false);

  readonly readonly = input(false);

  /**
   * ----------------------------------------------------
   * Accessibility
   * ----------------------------------------------------
   */

  readonly ariaLabel = input('');

  readonly tabIndex = input(0);

  /**
   * ----------------------------------------------------
   * Outputs
   * ----------------------------------------------------
   */

  readonly clicked = output<MouseEvent>();

  readonly focused = output<FocusEvent>();

  readonly blurred = output<FocusEvent>();

  /**
   * ----------------------------------------------------
   * Computed
   * ----------------------------------------------------
   */

  readonly interactiveDisabled = computed(
    () => this.disabled() || this.loading(),
  );

  /**
   * ----------------------------------------------------
   * Events
   * ----------------------------------------------------
   */

  protected emitClick(event: MouseEvent): void {
    if (this.interactiveDisabled()) {
      event.preventDefault();
      event.stopPropagation();

      return;
    }

    this.clicked.emit(event);
  }

  protected emitFocus(event: FocusEvent): void {
    this.focused.emit(event);
  }

  protected emitBlur(event: FocusEvent): void {
    this.blurred.emit(event);
  }
}
