import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import { IconComponent } from '../../../shared/ui/display/icon/icon.component';
import { MenuItem } from './menu.types';

@Component({
  selector: 'erp-menu',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() items: MenuItem[] = [];

  @Input() minWidth = 200;

  @Input() closeOnSelect = true;

  @Output() itemSelected = new EventEmitter<MenuItem>();

  @Output() closed = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closed.emit();
  }

  selectItem(item: MenuItem): void {
    if (item.disabled || item.divider) {
      return;
    }

    this.itemSelected.emit(item);

    if (this.closeOnSelect) {
      this.closed.emit();
    }
  }

  trackByLabel(index: number, item: MenuItem): string {
    return `${index}-${item.label}`;
  }
}
