import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  input,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';

import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';

import { SelectOption } from './select-option.model';
import { IconComponent, IconName } from '../../ui/display/icon';

@Component({
  selector: 'erp-select',
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: SelectOption[] = [];

  @Input() placeholder = 'Select';

  @Input() label = '';

  @Input() hint = '';

  @Input() appearance: 'outline' | 'fill' = 'outline';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() disabled = false;

  @Input() readonly = false;

  @Input() required = false;

  @Input() multiple = false;

  @Input() searchable = false;

  @Input() clearable = false;

  @Input() loading = false;

  @Input() error = '';

  @Input() success = '';

  @Input() emptyMessage = 'No records found';

  @Input() compareWith?: (a: any, b: any) => boolean;

  @Input() displayWith?: (value: any) => string;

  @Input() panelWidth: string = 'auto';

  @Input() maxHeight = 300;

  @Input() prefixIcon?: IconName;

  @Input() suffixIcon?: IconName;

  @Output() opened = new EventEmitter<void>();

  @Output() closed = new EventEmitter<void>();

  @Output() selectionChange = new EventEmitter<any>();

  @Output() searchChange = new EventEmitter<string>();

  @Output() cleared = new EventEmitter<void>();

  // readonly label = input('');
  // readonly options = input<SelectOption[]>([]);
  // readonly placeholder = input('Select');

  isOpen = false;

  searchText = '';

  filteredOptions: SelectOption[] = [];

  selectedOption?: SelectOption;

  selectedOptions: SelectOption[] = [];

  highlightedIndex = -1;

  value: any = null;

  displayValue = '';

  private onChange: (value: any) => void = () => {};

  private onTouched: () => void = () => {};

  @ViewChildren('optionElement')
  optionElements!: QueryList<ElementRef<HTMLElement>>;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.filteredOptions = [...this.options];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this.filteredOptions = [...this.options];

      this.syncSelection();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.onArrowDown();
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.onArrowUp();
        break;

      case 'Enter':
        event.preventDefault();
        this.onEnter();
        break;

      case 'Escape':
        event.preventDefault();
        this.close();
        break;

      case 'Home':
        event.preventDefault();
        this.highlightFirst();
        break;

      case 'End':
        event.preventDefault();
        this.highlightLast();
        break;

      case ' ':
        if (!this.isOpen) {
          event.preventDefault();
          this.open();
        }
        break;

      case 'Tab':
        this.close();
        break;
    }
  }

  private onArrowDown(): void {
    if (!this.isOpen) {
      this.open();

      return;
    }

    if (!this.filteredOptions.length) {
      return;
    }

    this.highlightedIndex = Math.min(
      this.highlightedIndex + 1,
      this.filteredOptions.length - 1,
    );

    this.scrollHighlightedIntoView();
  }

  private onArrowUp(): void {
    if (!this.isOpen) {
      this.open();

      return;
    }

    if (!this.filteredOptions.length) {
      return;
    }

    this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);

    this.scrollHighlightedIntoView();
  }

  private onEnter(): void {
    if (!this.isOpen) {
      this.open();

      return;
    }

    const option = this.filteredOptions[this.highlightedIndex];

    if (!option) {
      return;
    }

    this.select(option);
  }

  private highlightFirst(): void {
    if (!this.filteredOptions.length) {
      return;
    }

    this.highlightedIndex = 0;

    this.scrollHighlightedIntoView();
  }

  private highlightLast(): void {
    if (!this.filteredOptions.length) {
      return;
    }

    this.highlightedIndex = this.filteredOptions.length - 1;

    this.scrollHighlightedIntoView();
  }

  private scrollHighlightedIntoView(): void {
    queueMicrotask(() => {
      const element = this.optionElements.get(this.highlightedIndex);

      element?.nativeElement.scrollIntoView({
        block: 'nearest',
      });
    });
  }

  writeValue(value: any): void {
    this.value = value;

    this.syncSelection();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  update(value: any) {
    this.value = value;

    this.onChange(value);

    this.onTouched();
  }

  toggle(): void {
    if (this.disabled || this.readonly) {
      return;
    }

    this.isOpen ? this.close() : this.open();
  }

  open(): void {
    if (this.isOpen) {
      return;
    }

    this.filteredOptions = [...this.options];

    this.highlightedIndex = this.findSelectedIndex();

    if (this.highlightedIndex < 0 && this.filteredOptions.length) {
      this.highlightedIndex = 0;
    }

    this.isOpen = true;

    this.opened.emit();

    this.scrollHighlightedIntoView();
  }

  close(): void {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    this.highlightedIndex = -1;

    this.searchText = '';

    this.filteredOptions = [...this.options];

    this.closed.emit();

    this.onTouched();
  }

  select(option: SelectOption): void {
    if (option.disabled) {
      return;
    }

    this.selectedOption = option;

    this.value = option.value;

    this.displayValue = option.label;

    this.onChange(option.value);

    this.selectionChange.emit(option.value);

    this.close();
  }

  private syncSelection(): void {
    const option = this.options.find((item) =>
      this.compare(item.value, this.value),
    );

    if (!option) {
      this.selectedOption = undefined;

      this.displayValue = '';

      return;
    }

    this.selectedOption = option;

    this.displayValue = option.label;
  }

  private compare(a: any, b: any): boolean {
    if (this.compareWith) {
      return this.compareWith(a, b);
    }

    return a === b;
  }

  clear(event?: MouseEvent): void {
    event?.stopPropagation();

    this.value = null;

    this.selectedOption = undefined;

    this.displayValue = '';

    this.onChange(null);

    this.cleared.emit();
  }

  filter(): void {
    const keyword = this.searchText.trim().toLowerCase();

    this.filteredOptions = this.options.filter((option) =>
      option.label.toLowerCase().includes(keyword),
    );

    this.highlightedIndex = this.filteredOptions.length ? 0 : -1;

    this.searchChange.emit(keyword);
  }

  isSelected(option: SelectOption): boolean {
    return this.compare(option.value, this.value);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isOpen) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.close();
    }
  }

  private findSelectedIndex(): number {
    return this.filteredOptions.findIndex((option) =>
      this.compare(option.value, this.value),
    );
  }
}
