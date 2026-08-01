import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import { PopoverAlign, PopoverPlacement } from './popover.types';

@Component({
  selector: 'erp-popover',
  standalone: true,
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent {
  @Input() open = false;

  @Input() placement: PopoverPlacement = 'bottom';

  @Input() align: PopoverAlign = 'center';

  @Input() width = 280;

  @Input() closeOnOutsideClick = true;

  @Input() closeOnEscape = true;

  @Input() showArrow = true;

  @Output() closed = new EventEmitter<void>();

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.open || !this.closeOnOutsideClick) {
      return;
    }

    const target = event.target as Node;

    if (!this.elementRef.nativeElement.contains(target)) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open && this.closeOnEscape) {
      this.close();
    }
  }

  close(): void {
    this.closed.emit();
  }
}
