import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { IconComponent } from '../../ui/display/icon';
import { ComponentSize } from '../../types';

@Component({
  selector: 'erp-search',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() value = '';
  @Input() placeholder = 'Search...';

  @Input() size: ComponentSize = 'md';

  @Input() disabled = false;
  @Input() readonly = false;

  @Input() clearable = true;

  @Input() ariaLabel = 'Search';

  @Output() valueChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();
  @Output() cleared = new EventEmitter<void>();

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.value = input.value;
    this.valueChange.emit(this.value);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.search.emit(this.value);
    }

    if (event.key === 'Escape' && this.value) {
      this.clear();
    }
  }

  clear(): void {
    if (this.disabled || this.readonly || !this.value) {
      return;
    }

    this.value = '';

    this.valueChange.emit('');
    this.cleared.emit();
  }
}
