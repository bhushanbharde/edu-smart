import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { DropdownItem } from './models/dropdown.model';
import { IconComponent } from '../../ui/display/icon';

@Component({
  selector: 'erp-dropdown',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, IconComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  readonly items = input.required<DropdownItem[]>();

  readonly itemSelected = output<DropdownItem>();

  select(item: DropdownItem): void {
    if (item.disabled) {
      return;
    }

    this.itemSelected.emit(item);
  }
}
