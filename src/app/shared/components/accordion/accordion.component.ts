import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { AccordionItem } from './accordion.types';
import { IconComponent } from '../../ui/display/icon';

@Component({
  selector: 'erp-accordion',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];

  @Input() multiple = false;

  @Input() expandedIndex: number | null = null;

  @Output() expandedIndexChange = new EventEmitter<number | null>();

  private expandedIndexes = new Set<number>();

  isExpanded(index: number): boolean {
    if (this.multiple) {
      return this.expandedIndexes.has(index);
    }

    return this.expandedIndex === index;
  }

  toggle(index: number): void {
    const item = this.items[index];

    if (!item || item.disabled) {
      return;
    }

    if (this.multiple) {
      if (this.expandedIndexes.has(index)) {
        this.expandedIndexes.delete(index);
      } else {
        this.expandedIndexes.add(index);
      }

      return;
    }

    this.expandedIndex = this.expandedIndex === index ? null : index;

    this.expandedIndexChange.emit(this.expandedIndex);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
