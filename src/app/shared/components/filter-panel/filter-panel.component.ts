import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';


import { FilterField } from './filter-panel.types';
import { IconComponent } from '../../ui/display/icon';

@Component({
  selector: 'erp-filter-panel',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPanelComponent {
  @Input() fields: FilterField[] = [];

  @Input() values: Record<string, string> = {};

  @Input() title = 'Filters';

  @Input() width = 320;

  @Output() apply = new EventEmitter<Record<string, string>>();

  @Output() clear = new EventEmitter<void>();

  @Output() close = new EventEmitter<void>();

  getValue(key: string): string {
    return this.values[key] ?? '';
  }

  updateValue(key: string, event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement;

    this.values = {
      ...this.values,
      [key]: target.value,
    };
  }

  onApply(): void {
    this.apply.emit({
      ...this.values,
    });
  }

  onClear(): void {
    this.values = {};

    this.clear.emit();
  }

  onClose(): void {
    this.close.emit();
  }
}
