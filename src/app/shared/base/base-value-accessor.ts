import { ControlValueAccessor } from "@angular/forms";

export abstract class BaseValueAccessor<T> implements ControlValueAccessor {
  value!: T;

  disabled = false;

  protected onChange: (value: T) => void = () => {};

  protected onTouched: () => void = () => {};

  writeValue(value: T): void {
    this.value = value;
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  protected updateValue(value: T): void {
    if (this.disabled) {
      return;
    }

    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  /**
   * Helper for templates to avoid null/undefined checks.
   */
  protected getStringValue(): string {
    return typeof this.value === 'string' ? this.value : '';
  }
}
