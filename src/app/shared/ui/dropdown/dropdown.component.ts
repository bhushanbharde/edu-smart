import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { DropdownPosition, DropdownTrigger } from './dropdown.types';

@Component({
  selector: 'erp-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input()
  position: DropdownPosition = 'bottom-end';

  @Input()
  trigger: DropdownTrigger = 'click';

  readonly opened = signal(false);

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  toggle(): void {
    if (this.trigger !== 'click') {
      return;
    }

    this.opened.update((value) => !value);
  }

  open(): void {
    this.opened.set(true);
  }

  close(): void {
    this.opened.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.close();
    }
  }
}
