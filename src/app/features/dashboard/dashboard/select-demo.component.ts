import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../../../shared/components/select/select.component';
import { SelectOption } from '../../../shared/interfaces/select-option.interface';

@Component({
  selector: 'app-select-demo',
  standalone: true,
  imports: [ReactiveFormsModule, SelectComponent],
  templateUrl: './select-demo.component.html',
})
export class SelectDemoComponent {
  employeeControl = new FormControl();

  countryControl = new FormControl();

  studentControl = new FormControl();

  employeeOptions: SelectOption[] = [
    {
      label: 'Administrator',
      value: 1,
      icon: 'user',
    },
    {
      label: 'Teacher',
      value: 2,
      icon: 'user',
    },
    {
      label: 'Accountant',
      value: 3,
      icon: 'user',
    },
    {
      label: 'Principal',
      value: 4,
      icon: 'user',
    },
  ] as unknown as SelectOption[];

  countryOptions: SelectOption[] = [
    {
      label: 'India',
      value: 'IN',
    },
    {
      label: 'Japan',
      value: 'JP',
    },
    {
      label: 'United States',
      value: 'US',
    },
    {
      label: 'Germany',
      value: 'DE',
    },
  ] as unknown as SelectOption[];

  studentStatusOptions: SelectOption[] = [
    {
      label: 'Active',
      value: 'active',
    },
    {
      label: 'Pending',
      value: 'pending',
    },
    {
      label: 'Suspended',
      value: 'suspended',
      disabled: true,
    },
    {
      label: 'Graduated',
      value: 'graduated',
    },
  ] as unknown as SelectOption[];
}
