import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IconComponent } from '../../ui/display/icon';


@Component({
  selector: 'erp-search-box',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() value = '';

  @Input() placeholder = 'Search...';

  @Input() disabled = false;

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() debounce = 300;

  @Input() clearable = true;

  @Output() valueChange = new EventEmitter<string>();

  @Output() search = new EventEmitter<string>();

  private debounceTimer?: ReturnType<typeof setTimeout>;

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.value = input.value;

    this.valueChange.emit(this.value);

    this.emitSearchWithDebounce();
  }

  onSearch(): void {
    this.search.emit(this.value);
  }

  clear(): void {
    this.value = '';

    this.valueChange.emit('');

    this.search.emit('');
  }

  private emitSearchWithDebounce(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      this.search.emit(this.value);
    }, this.debounce);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }

    if (event.key === 'Escape' && this.value) {
      this.clear();
    }
  }
}
