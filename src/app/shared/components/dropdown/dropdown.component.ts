import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { DropdownItem, DropdownPosition } from './dropdown.types';
import { IconComponent } from '../../ui/display/icon';

@Component({
  selector: 'erp-dropdown',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input()
  items: DropdownItem[] = [];

  @Input()
  position: DropdownPosition = 'bottom-end';

  @Input()
  disabled = false;

  @Input()
  closeOnSelect = true;

  @Output()
  itemSelected = new EventEmitter<DropdownItem>();

  isOpen = false;

  toggle(): void {
    if (this.disabled) {
      return;
    }

    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  select(item: DropdownItem): void {
    if (item.disabled || item.divider) {
      return;
    }

    this.itemSelected.emit(item);

    if (this.closeOnSelect) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
