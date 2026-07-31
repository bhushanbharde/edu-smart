import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  Input,
  QueryList
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { RadioComponent } from '../radio';

@Component({
  selector: 'erp-radio-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ]
})
export class RadioGroupComponent
implements ControlValueAccessor, AfterContentInit {

  @Input()
  direction: 'row' | 'column' = 'row';

  @ContentChildren(RadioComponent)
  radios!: QueryList<RadioComponent>;

  value: any;

  protected onChange = (_: any) => {};

  protected onTouched = () => {};

  ngAfterContentInit(): void {

    this.initialize();

    this.radios.changes.subscribe(() => this.initialize());

  }

  private initialize(): void {

    this.radios.forEach(radio => {

      radio.checked = radio.value === this.value;

      radio.selected.subscribe(() => {
        this.select(radio);
      }); 

    });

  }

  private select(selected: RadioComponent): void {

    this.value = selected.value;

    this.radios.forEach(r => {

      r.checked = r === selected;

    });

    this.onChange(this.value);

    this.onTouched();

  }

  writeValue(value: any): void {

    this.value = value;

    if (!this.radios) return;

    this.radios.forEach(r => {

      r.checked = r.value === value;

    });

  }

  registerOnChange(fn: any): void {

    this.onChange = fn;

  }

  registerOnTouched(fn: any): void {

    this.onTouched = fn;

  }

  setDisabledState(disabled: boolean): void {

    this.radios?.forEach(r => r.disabled = disabled);

  }

}